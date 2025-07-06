const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {

  try {

    const { title, content, status } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const postStatus = status && ['draft', 'published'].includes(status) ? status : 'published';

    const newPost = await db.query(
      'INSERT INTO posts (user_id, title, content, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.user.id, title, content, postStatus]
    );

    res.status(201).json({ message: 'Post created successfully', post: newPost.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }

});

router.put('/:id', auth, async (req, res) => {

  try {
    const { id } = req.params;
    const { title, content, status } = req.body;

    const post = await db.query('SELECT * FROM posts WHERE id = $1 AND user_id = $2', [id, req.user.id]);
    if (post.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or you are not authorized to update it' });
    }

    if (title && title.trim() === '') {
      return res.status(400).json({ message: 'Title cannot be empty' });
    }
    if (content && content.trim() === '') {
      return res.status(400).json({ message: 'Content cannot be empty' });
    }
    if (status && !['draft', 'published'].includes(status)) {
      return res.status(400).json({ message: 'Status must be "draft" or "published"' });
    }

    const updates = {};
    
    if (title) updates.title = title;
    if (content) updates.content = content;
    if (status) updates.status = status;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'At least one field (title, content, status) must be provided to update' });
    }

    updates.updated_at = new Date();

    const setClause = Object.keys(updates)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');
    const values = Object.values(updates);

    const updatedPost = await db.query(
      `UPDATE posts SET ${setClause} WHERE id = $${values.length + 1} AND user_id = $${values.length + 2} RETURNING *`,
      [...values, id, req.user.id]
    );

    res.json({ message: 'Post updated successfully', post: updatedPost.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await db.query('SELECT * FROM posts WHERE id = $1 AND user_id = $2', [id, req.user.id]);
    if (post.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or you are not authorized to delete it' });
    }

    await db.query('DELETE FROM posts WHERE id = $1 AND user_id = $2', [id, req.user.id]);

    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/', async (req, res) => {
  try {
    let query = 'SELECT * FROM posts WHERE status = $1';
    const values = ['published'];

    if (req.header('x-auth-token')) {
      try {
        const decoded = require('jsonwebtoken').verify(req.header('x-auth-token'), process.env.JWT_SECRET);
        query = 'SELECT * FROM posts WHERE status = $1 OR (user_id = $2 AND status = $3)';
        values.push(decoded.user.id, 'draft');
      } catch (err) {
      }
    }

    const posts = await db.query(query, values);
    res.json({ message: 'Posts retrieved successfully', posts: posts.rows });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let query = 'SELECT * FROM posts WHERE id = $1 AND status = $2';
    const values = [id, 'published'];

    if (req.header('x-auth-token')) {
      try {
        const decoded = require('jsonwebtoken').verify(req.header('x-auth-token'), process.env.JWT_SECRET);
        query = 'SELECT * FROM posts WHERE id = $1 AND (status = $2 OR (user_id = $3 AND status = $4))';
        values.push(decoded.user.id, 'draft');
      } catch (err) {
        // If token is invalid, proceed with public posts only
      }
    }

    const post = await db.query(query, values);
    if (post.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or you are not authorized to view it' });
    }

    res.json({ message: 'Post retrieved successfully', post: post.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
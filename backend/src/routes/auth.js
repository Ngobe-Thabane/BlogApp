const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { generateToken } = require('../utils/jwt');

router.post('/register', async (req, res) => {
    try {
        const { email, username, password} = req.body;

        if (!email || !username || !password ) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await db.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id, email, username',
            [email, username, hashedPassword]
        );

        const token = generateToken(newUser.rows[0]); 
        const user = newUser.rows[0];
        res.status(201).json({ message: 'User registered successfully', token, user });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password,user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user.rows[0]); 

        res.json({ message: 'Logged in successfully', token });

    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Server error');
    }
});

module.exports = router;


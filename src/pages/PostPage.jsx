import { useState } from "react"
import { POSTS } from "../middleware/InMemoryDb";
import { useNavigate } from "react-router";

let postId = 0;

export default function PostPage() {
  
  const userId = localStorage.getItem('loggedUser');
  const date = new Date().toDateString();
  const [post, setPost] = useState({postId: ++postId, userID:(Number.parseInt(userId)), datePosted:date, title:"", content:""});
  const navigate = useNavigate();

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setPost((oldData)=>({
      ...oldData,
      [name] : value
    }));
  }

  return (
    <div className="posting-page">
      <form action="" className="post-form" onSubmit={(e)=>{
        e.preventDefault();
        POSTS.push(post);
        navigate('/projectBlogs/myBlogs');
        }}>
        <input type="text"  className="post-heading" placeholder="TITLE" name="title" value={post.title} onChange={handleChange}/>
        <textarea className="post-content" placeholder="Post content" name="content" value={post.content} onChange={handleChange}  />
        <button type="submit">POST</button>
      </form>
    </div>
  )
  
};

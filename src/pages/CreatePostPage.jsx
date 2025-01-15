import { useState } from "react"
import { POSTS } from "../middleware/Enum.js";
import { useNavigate } from "react-router";
import ReactQuill from 'react-quill';
import { MODULES } from "../middleware/Enum.js";
import 'react-quill/dist/quill.snow.css';

let postId = 0;

export default function PostPage() {
  
  const userId = localStorage.getItem('loggedUser');
  const date = new Date().toDateString();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  return (
    <div className="posting-page">
      <form action="" className="post-form" onSubmit={(e)=>{
        
        e.preventDefault();
        POSTS.push({postId: ++postId, userID:(Number.parseInt(userId)), datePosted:date, title:title, content:value});
        navigate('/projectBlogs/myBlogs');
        }}>
        <input type="text"  className="post-heading" placeholder="TITLE" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <ReactQuill modules={MODULES} theme="snow" value={value} name="content" onChange={setValue}  className="folder"  />
        <button type="submit">POST</button>
      </form>
    </div>
  )
  
};

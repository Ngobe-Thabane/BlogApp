import { useState, useRef } from "react"
import { POSTS } from "../middleware/Enum.js";
import { useNavigate, useLocation } from "react-router";
import ReactQuill from 'react-quill';
import { MODULES } from "../middleware/Enum.js";
import 'react-quill/dist/quill.snow.css';

let postId = 0;

export default function PostPage() {
  
  const userId = localStorage.getItem('loggedUser');
  const date = new Date().toDateString();
  const location = useLocation();

  const [intialTitle,intialValue, updating, id] =  (location.state === null) ? "" 
      : [location.state.userPost.post.title, location.state.userPost.post.content, true, location.state.userPost.post.postId];

  const [value, setValue] =  useState(intialValue);
  const [title, setTitle] = useState(intialTitle);

  const navigate = useNavigate();
   
  return (
    <div className="posting-page">
      <form action="" className="post-form" onSubmit={(e)=>{
        
        e.preventDefault();
        if(updating === true){
          const postIndex = POSTS.findIndex(post => post.postId === id);
          POSTS[postIndex].title = title;
          POSTS[postIndex].content = value;
        }
        else{
          POSTS.push({postId: ++postId, userID:(Number.parseInt(userId)), datePosted:date, title:title, content:value});
        }
        
        navigate('/projectBlogs/myBlogs');
        
        }}>
        <input type="text" required className="post-heading" placeholder="Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <ReactQuill modules={MODULES} theme="snow" value={value} name="content" onChange={setValue}  className="folder" />
        <button type="submit">POST</button>
      </form>
    </div>
  )
  
};

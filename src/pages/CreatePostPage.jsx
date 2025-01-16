import { useState, useRef } from "react"
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
  const quillRef = useRef(null);
  const navigate = useNavigate();
  const imagehandler = ()=>{
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', e.target.result);
      };

      reader.readAsDataURL(file);
    };
  }
  MODULES.toolbar.handlers= {};
  MODULES.toolbar.handlers.image = imagehandler;
  
  return (
    <div className="posting-page">
      <form action="" className="post-form" onSubmit={(e)=>{
        
        e.preventDefault();
        POSTS.push({postId: ++postId, userID:(Number.parseInt(userId)), datePosted:date, title:title, content:value});
        navigate('/projectBlogs/myBlogs');
        }}>
        <input type="text"  className="post-heading" placeholder="TITLE" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <ReactQuill modules={MODULES} theme="snow" value={value} name="content" onChange={setValue}  className="folder" ref={quillRef}  />
        <button type="submit">POST</button>
      </form>
    </div>
  )
  
};

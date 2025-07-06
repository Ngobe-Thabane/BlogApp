import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MODULES } from "../lib/quill";
import useBlogStore from "../lib/BlogStore";
import axios from "axios";
import { useNavigate } from "react-router";


export default function PostPage() {

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const token = useBlogStore((state)=>(state.token));
  const navigate = useNavigate();
  return (
    <div>
      <form
        action=""
        className="post-form"
        onSubmit={async(e) => {
          e.preventDefault();

          try{
            const data = {title:title, content:value, status:'published'}
            const uploadPost = await axios.post('http://localhost:5000/api/posts', data, {
              headers:{
                'Content-Type' :'applications/json',
                'Authorization' : `bearer ${token}`
              }
            });
            if(uploadPost.status == 201){
              navigate('/posts');
            }else{
              alert('Could not upload post');
            }
          }catch(err:unknown){
            alert(err)
          }
        }}
      >
        <input
          type="text"
          required
          className="post-heading"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e)=>{
            console.log(title);
            setTitle(e.currentTarget.value);
          }}
        />
        <ReactQuill
          modules={MODULES}
          theme="snow"
          value={value}
          onChange={(e)=>{
            setValue(e);
          }}
          className="folder"
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}

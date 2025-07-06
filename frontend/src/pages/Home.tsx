import { Link } from "react-router";

import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const getPosts = async ()=>{
      const postsData = await axios.get('http://localhost:5000/api/posts', {
        headers:{
          'Content-Type' :'application/json'
        }
      })
      if(postsData.status === 200){
        setPosts(postsData.data.posts);
      }
    }
    getPosts();
  })
  return (
    <div className="bg-base-100 w-1/2 m-auto">
      <ul className="list bg-base-100 rounded-box shadow-md">
        {
          posts.map((post)=>{
            return (
              <li className="list-row" key={post}>
                <Link to={'/post'} state={post} className="">
                  <PostCard post={post}/>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
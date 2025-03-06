import { Link } from "react-router"
import { deletePost } from "../middleware/Validate";
import { useNavigate } from "react-router";

export default function PostList({POSTS, userPost}){
  
  const navigate = useNavigate();
  return (
      <div className="blog">
        <div className="blog-list">
          {POSTS.map(post =>{
            return (<div className="preview-post"> 
              <div className="">
                <h3>{post.title}</h3>
              </div>
            </div>);
          })}
        </div>
      </div>
   )
}
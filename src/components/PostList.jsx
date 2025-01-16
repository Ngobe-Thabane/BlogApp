import { Link } from "react-router"
import { deletePost } from "../middleware/Validate";
import { useNavigate } from "react-router";
export default function PostList({POSTS, userPost}){
  const navigate = useNavigate();
  return (
      <div className="blogs">
        <ul className="blog-list">
          {POSTS.map(post =>{
            return (<li key={post.title}>
              <div className="post-list">
                <Link to={'/projectBlogs/postPage'} state={{userPost: {post}}}><span>{post.title}</span></Link>
                {userPost &&
                <div> 
                  <Link to={'/projectBlogs/post'} state={{userPost: {post}}} >edit</Link>
                  <button onClick={()=> deletePost(post, navigate)}>X</button>
                </div>
                 }
              </div>
              </li>);
          })}
        </ul>
      </div>
   )
}
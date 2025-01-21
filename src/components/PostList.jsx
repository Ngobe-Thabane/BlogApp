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
                <div className="user-edit"> 
                  <Link to={'/projectBlogs/post'} state={{userPost: {post}}} >
                  <img src="../icons8-edit-30.png" alt="edit" className="edit" />
                  </Link>

                  <button onClick={()=> deletePost(post, navigate)} className="del-btn">
                    <img src="../icons8-delete-48.png" alt="delete" />
                  </button>
                </div>
                 }
              </div>
              </li>);
          })}
        </ul>
      </div>
   )
}
import { POSTS } from "../middleware/Enum"
import { Link } from "react-router"

export default function DashBoard() {
  return(
    <div className="blogs">
      <div className="blog-intro">
        <h1>Wlecome to the Project Blog</h1>
        <p>Blog about Frontend, Backend, DevOps and everything in between.</p>
      </div>
      <div className="blog">
        <ul className="blog-list">
          {POSTS.map((post)=>{
            return (<li key={post.postId}><Link to={'/projectBlogs/postPage'} state={{userPost: {post}}}><span>{post.title}</span> <span className="date">{post.datePosted}</span></Link></li>)
          })}          
        </ul>
      </div>
    </div>
  )
  
};

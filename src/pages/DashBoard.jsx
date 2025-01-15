import PostList from "../components/PostList"
import { POSTS } from "../middleware/Enum"

export default function DashBoard() {
  return(
    <div className="blogs">
      <div className="blog-intro">
        <h1>Wlecome to the Project Blog</h1>
        <p>Blog about Frontend, Backend, DevOps and everything in between.</p>
      </div>
      <PostList POSTS={POSTS} />
    </div>
  )
  
};

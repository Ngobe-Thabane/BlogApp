import PostList from "../components/PostList"
import { POSTS } from "../middleware/Enum"
import './Dashboard.css'
export default function DashBoard() {
  return(
    <div className="blogs">
      <div className="blog-intro">
        <p>Latest Posts</p>
      </div>
      <PostList POSTS={POSTS} userPost={false} />
    </div>
  )
  
};

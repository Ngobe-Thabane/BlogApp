import { Link, Outlet } from "react-router";
import './UserNavigation.css'
export default function UserNavigation() {
  return(
    <div>
      <nav className="user-nav">
        <div className="logo">Bloger</div>
        <div className="link-list">
          <Link to={'/projectBlogs/blogs'}>blogs</Link>
          <Link to={'/projectBlogs/post'}>post</Link>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
};

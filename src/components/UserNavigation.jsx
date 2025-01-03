import { Link, Outlet } from "react-router";

export default function UserNavigation() {
  return(
    <div>
      <nav>
        <div className="user-dashboard">
          <div className="logo">P.B</div>
          <div className="link-list">
            <Link to={'/projectBlogs/post'}>post</Link>
            <Link to={'/projectBlogs/blogs'}>blogs</Link>
            <Link to={'/projectBlogs/myBlogs'} >my blogs</Link>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
};

import { Link, Outlet } from "react-router";
import useBlogStore from "../lib/BlogStore";

export default function NavBar() {

  const {isLoggedIn} = useBlogStore();

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">Blogger</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link to={''} className="link-primary">Explore</Link>
          {
            isLoggedIn === true && <Link to={'/library'} className="link-primary">My Library</Link>
          }
          <Link to={'/post'} className="link-primary">New Post</Link>
          {
            isLoggedIn === false && 
            <>
              <Link to={'/login'} className="btn btn-primary" > Login</Link>
              <Link to={'/SignUp'} className="btn btn-primary">SignUp</Link>
            </>
          }
        </div>
      </div>
      <Outlet />
    </>
  );
}

import { Link, Outlet } from "react-router"

export default function Navigation() {

  return (
    <>
    <nav className="">
      <div className="navigation">
        <div className="logo"><p>Project Blog</p></div>
        <ul className="link-list">
          <li><Link to={'/home'} className="">Home</Link></li>
          <li><Link to={'/login'} className="">Login</Link></li>
          <li><Link to={'/register'} className="">Register</Link></li>
        </ul>
      </div>
    </nav>
    <Outlet/>
    </>
  )
};

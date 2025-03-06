import {Link,  Outlet } from "react-router"
import './Nav.css'
export default function Navigation() {

  return (
    <>
    <nav className="navigation">
      <div className="logo"><p>BlogApp</p></div>
      <Link to={'/login'}>
        <button className="read-btn">Start Reading</button>
      </Link>
    </nav>
    <Outlet/>
    </>
  )
};

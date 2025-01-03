import { Link } from "react-router"
export default function Homepage() {
  
  return (
    <>
      <div className="home-page">
        <div className="home-page-content">
          <h3 className="blog-heading">Project <br/> stories & ideas</h3>
          <p className="slogen">A place to read, write, and deepen your understanding</p>
          <Link to={'/login'} className="start">Start Reading</Link>
        </div>
        <div className="project-pic">
          <img src="./rb_81763.png" alt="project illustration" className="pic" />
        </div>
      </div>
    </>
  )
};

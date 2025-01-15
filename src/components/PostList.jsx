import { Link } from "react-router"

export default function PostList({POSTS}){
 
  return (
      <div className="blogs">
        <ul className="blog-list">
          {POSTS.map(post =>{
            return (<li key={post.title}><Link to={'/projectBlogs/postPage'} state={{userPost: {post}}}><span>{post.title}</span> <span className="date">{post.datePosted}</span></Link></li>);
          })}
        </ul>
      </div>
   )
}
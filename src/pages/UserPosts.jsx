import { POSTS } from "../middleware/InMemoryDb";
import { Link } from "react-router";

export default function UserPosts() {

  const user = localStorage.getItem('loggedUser');

  return (
    <div className="blogs">
      <ul className="blog-list">
        {POSTS.map(post =>{
          if(post.userID === Number.parseInt(user)){
            return (<li key={post.title}><Link to={'/projectBlogs/postPage'} state={{userPost: {post}}}><span>{post.title}</span> <span className="date">{post.datePosted}</span></Link></li>);
          }})}
      </ul>
    </div>
  )
};

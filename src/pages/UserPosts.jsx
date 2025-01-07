import { POSTS } from "../middleware/InMemoryDb";
import { Link } from "react-router";

export default function UserPosts() {

  const user = localStorage.getItem('loggedUser');
  const userPost = POSTS.filter(post => post.userID === Number.parseInt(user));

  return (
    <div className="blogs">
      <ul className="blog-list">
        {userPost.map(post =>{
          return (<li><Link to={'/projectBlogs/postPage'} state={{userPost: {post}}}><span>{post.title}</span> <span className="date">{post.datePosted}</span></Link></li>);
        })}
      </ul>
    </div>
  )
};

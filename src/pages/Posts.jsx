import PostList from "../components/PostList";
import { POSTS } from "../middleware/Enum";

export default function UserPosts() {

  const user = localStorage.getItem('loggedUser');
  const post = POSTS.filter(post => post.userID === Number.parseInt(user));
  return (<PostList POSTS={post} />)
}

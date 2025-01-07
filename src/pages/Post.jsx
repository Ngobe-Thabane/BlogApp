import { useLocation } from "react-router"


export default function Post() {
  const location = useLocation();
  const {userPost} = location.state;
  const post = userPost.post;
  
  return (
    <div className="blogs post">
      <div>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
      </div>
      <div>
        <p>{post.content}</p>
      </div>
    </div>
  )
};

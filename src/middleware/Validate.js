import { USERS, POSTS } from "./Enum";

let user = 1;
export  async function  logIn(data, navigate){
  const url = 'http://localhost:3000/api/auth/login';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
  if(response.ok){
    const {token} = await response.json();
    localStorage.setItem('token', token)
    navigate('/projectBlogs')
  }
  console.log(response)
  
}

 export function deletePost(post, navigate){
  const index = POSTS.findIndex(delPost => delPost.postId == post.postId);
  POSTS.splice(index, 1);
  navigate('/projectBlogs/blogs');
 }

export function signIn(data, navigate){
  const {username, password} = data;
  USERS.push({id:++user, username:username, password:password});
  navigate('/login');
}
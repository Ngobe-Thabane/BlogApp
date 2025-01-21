import { USERS, POSTS } from "./Enum";

let user = 1;
export function logIn(data, navigate){

  const {username, password} = data;

  USERS.forEach(userData =>{

    if(userData.username === username && userData.password === password){
      localStorage.setItem('loggedUser', userData.id);
      navigate('/projectBlogs');
    }
  });
}

 export function deletePost(post, navigate){
  console.log(post)
  const postDEl = POSTS.splice(post, 1)
  console.log(postDEl)
  navigate('/projectBlogs/blogs');
 }

export function signIn(data, navigate){
  const {username, password} = data;
  USERS.push({id:++user, username:username, password:password});
  navigate('/login');
}
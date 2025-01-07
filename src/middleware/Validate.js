import { USERS } from "./InMemoryDb";


export function logIn(data, navigate){

  const {username, password} = data;

  USERS.forEach(userData =>{

    if(userData.username === username && userData.password === password){
      localStorage.setItem('loggedUser', userData.id);
      navigate('/projectBlogs');
    }

  });

}

export function signIn(data, navigate){
  
}
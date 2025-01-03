import { Link } from "react-router";

export default function LoginPage() {
  
  return (
  <div className="login-form">
    <form action="" className="">
      <label for="username" >Username </label>
      <input type="text" id="username" ></input>

      <label for="password">Password </label>
      <input type="password" id="password"  ></input>
      
      <button type="submit" >Login</button>
    </form>
    <p>Don't have a account <Link to={'/projectBlogs'}>Sign in</Link></p>

  </div>
  )
};

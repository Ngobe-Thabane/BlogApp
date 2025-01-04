import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function LoginPage() {

  let [formData, setFormData] = useState({username:'', password:''});
  let navigate = useNavigate();

  const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormData((oldData)=>({
      ...oldData,
      [name] : value
    }));
  }

  
  return (
  <div className="login-form">
    <form className="" onSubmit={(e) =>{
      e.preventDefault()
      logInUser(formData, navigate);
    }}>
      <label for="username" >Username </label>
      <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} ></input>

      <label for="password">Password </label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} ></input>
      
      <button type="submit" >Login</button>
    </form>
    <p>Don't have a account <Link to={'/register'}>Sign in</Link></p>

  </div>
  )
};

async function logInUser(formData, navigate){

  const response = await fetch('http://localhost:9000/logIn', {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if(response.ok){
    localStorage.setItem("isLogedIn",true);
    navigate('/projectBlogs')
  }
}
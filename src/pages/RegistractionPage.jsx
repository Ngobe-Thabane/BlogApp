import { useState } from "react";
import { useNavigate,Link } from "react-router";
export default function RegistractionPage() {

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
    <form onSubmit={(event)=>{
        event.preventDefault();
        sendPostRequest(formData, navigate);
      }} className="" >
      <label for="username" >Username </label>
      <input type="text" name="username" value={formData.username} onChange={handleChange}></input>
        <label for="username" >Password </label>
      <input type="password" name="password" value={formData.password} onChange={handleChange}></input>
          
      <button type="submit" >Register</button>

    </form>
    <p>have a account <Link to={'/login'}>login</Link></p>
  </div>
  )
};


async function sendPostRequest(formData, navigate){

  const response = await fetch('http://localhost:9000/createAccount', {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if(response.status === 200){
    navigate('/login');
  }
}
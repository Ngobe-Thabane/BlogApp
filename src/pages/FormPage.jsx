import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function FormPage({navLink, authFunction, userMassage, action, authAction}) {

  const [data, setFormData] = useState({username:'', password:''});
  const navigate = useNavigate();

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
      e.preventDefault();
      authFunction(data, navigate);
    }}>
      <label for="username" >Username </label>
      <input type="text" id="username" name="username" value={data.username} onChange={handleChange} ></input>

      <label for="password">Password </label>
      <input type="password" id="password" name="password" value={data.password} onChange={handleChange} ></input>
      
      <button type="submit" >{authAction}</button>
    </form>
    <p>{userMassage}<Link to={navLink}>{action}</Link></p>

  </div>
  )
};

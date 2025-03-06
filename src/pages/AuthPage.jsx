import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import './LoginForm.css'
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
    <form className="form-data" onSubmit={(e) =>{
      e.preventDefault();
      authFunction(data, navigate);
    }}>
      <div className="input-data">
        <label for="username" >Username </label>
        <input type="text" id="username" name="username" value={data.username} onChange={handleChange} className="input-field"></input>
      </div>

      <div className="input-data">
        <label for="password">Password </label>
        <input type="password" id="password" name="password" value={data.password} onChange={handleChange} className="input-field" ></input>
      </div>
      
      <button type="submit" className="submit-btn" >{authAction}</button>
    </form>
    <div className="form-message">
      <p>{userMassage}</p>
      <Link to={navLink} className="action-link">{action}</Link>
    </div>

  </div>
  )
};

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import useBlogStore from "../lib/BlogStore";


export function LogIn(){
  const [login, setLoginUser] = useState({email:'', password:''});
  const navigate = useNavigate();
  const {setToken, setLogin} = useBlogStore();
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.currentTarget;

    setLoginUser((prevValues)=>({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <form action="" onSubmit={ async(e)=>{
      e.preventDefault();
      try{
        const logeUser = await axios.post('http://localhost:5000/api/auth/login', login, {
          headers:{
            'Content-Type': 'application/json',
          }
        })
        if(logeUser.status == 200 && logeUser.data.token){
          setToken(logeUser.data.token as string)
          setLogin(true);
          navigate('/');
        }
      }catch(err:unknown){
        alert(err);
      }
    }}  >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" name="email" value={login.email} onChange={handleChange}/>

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" name="password" value={login.password} onChange={handleChange} />

        <button className="btn btn-neutral mt-4" type="submit">Login</button>
    </fieldset>
    </form>
  )
}
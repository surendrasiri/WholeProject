import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { ImUser } from "react-icons/im";

function Login() {

    const [formData, setFormData] = useState()

    const navigate = useNavigate();   // {now we'll use useNavigate to navigate to another route after login or signup of after any task}
    
    function handleChange(e){
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:5000/user/login", formData);
            console.log(response);
            alert("User Logged In Successfully");
            // navigate("/profile");
            console.log(response.data.data.token);
            localStorage.setItem("token", response.data.data.token) // {we'll store a token in local storage like this}
            const decodedToken = jwtDecode(response.data.data.token);
            // console.log(decodedToken);
            // localStorage.setItem("role", response.data.data.token.role);
            localStorage.setItem("role", decodedToken.role);
            if(decodedToken.role === "admin"){
              navigate('/admin');
            }else{
              navigate('/profile')
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || "Error Login User"); // {if one can't see error then 'error login' is custom message}
        }
    }

  return (
    <div className='w-screen h-screen grid grid-cols-2'>
      <div className='bg-gradient-to-r from-sky-500 to-indigo-500'>
        <img src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg' alt='Image' className='h-screen w-screen'/>
      </div>
      <div className='bg-gradient-to-r from-yellow-200 to-purple-700 flex items-center justify-center flex-col space-y-5'>
        <form className='border-2 w-3/4 h-3/4 place-content-center text-center shadow-md shadow-slate-500 bg-gradient-to-r from-indigo-400 to-purple-400'>
          <div className=''>
          <ImUser className='w-20 h-20 mx-auto'/>
          </div>
          <div className='mxy-auto mt-3'>
            <p className='font-bold text-3xl'>Login Here</p>
          </div>
          <div className='mt-10 text-3xl'>
            <input type='email' name='email' placeholder='Enter E-mail' onChange={handleChange} className='border-4 border-slate-300 hover:border-slate-400 rounded-xl'/>
          </div>
          <div className='mt-10 text-3xl'>
            <input type='password' name='password' placeholder='Enter Password' onChange={handleChange} className='border-4 border-slate-300 hover:border-slate-400 rounded-xl'/>
          </div>
          <div className='mt-10 text-2xl'>
            <button className='border-4 border-slate-300 hover:border-slate-400 hover:bg-blue-500 bg-white rounded-xl' onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login

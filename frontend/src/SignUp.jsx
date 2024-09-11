import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [formData, setFormData] = useState()

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name] : e.target.value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:5000/user/createUser", formData);
      console.log(response);
      alert("User Created Successfully");
      navigate("/login")
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  return (
    <div>
      <form>
      <input type='text' name='firstName' placeholder='Enter Name' onChange={handleChange}/>
      <input type='text' name='lastName' placeholder='Enter Last Name' onChange={handleChange}/>
      <input type='email' name='email' placeholder='Enter E-mail' onChange={handleChange}/>
      <input type='password' name='password' placeholder='Enter Password' onChange={handleChange}/>
      <input type='number' name='mobileNumber' placeholder='Enter Mobile Number' onChange={handleChange}/>
      <button onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  )
}

export default SignUp

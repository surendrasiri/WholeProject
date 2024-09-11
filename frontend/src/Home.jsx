import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar';

function Home() {

  const [auth, setAuth] = useState(localStorage.getItem("token") ? true : false);
  const [role, setRole] = useState(localStorage.getItem("role"));
  
  return (
    <div>
      <Navbar/>
      {/* <Link to={"/navbar"}>Navbar</Link>
      <p>Home</p>
      <Link to={"/profile"}>Profile</Link>
      <br/>
      <Link to={"/editprofile"}>Edit Profile</Link>
      <br/>
      <Link to={"/login"}>Login</Link>
      <br/>
      <Link to={"/signup"}>SignUp</Link>
      <br/>
      <Link to={"/admin"}>Admin</Link> */}
      <Outlet context={{auth, setAuth, role}}/>
      {/* we can also send auth to all the children of Home through Outlet and we can access 
      this useState in all Home's children*/}
    </div>
  )
}

export default Home

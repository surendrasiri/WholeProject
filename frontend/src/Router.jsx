// import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile';
import EditProfile from './EditProfile';
import SignUp from './SignUp';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Admin from './Admin';
import Navbar from './Navbar';
import OrderPage from './OrderPage';
import OrderByUser from './OrderByUser';

const Router = createBrowserRouter(
    [
        {
            path : "/",
            element : <Home/>,
            children : [
                {
                    path : "/",
                    element : <Dashboard/>
                },
                {
                    path : "/navbar",
                    element : <Navbar/>
                },
                {
                    path : "/",
                    element : <ProtectedRoute role = "user"/>,
                    children : [
                        {
                            path : "/profile",
                            element : <Profile/>
                        },
                        {
                            path : "/editprofile",
                            element : <EditProfile/>
                        },
                        {
                            path : "/order/:id",
                            element : <OrderPage/>
                        },
                        {
                            path : "/myorder",
                            element : <OrderByUser/>
                        },
                    ]
                },
                {
                    path : "/",
                    element : <ProtectedRoute role = "admin"/>,  // here we're passing props in it and also we've to accept it in Protected Component
                    children : [
                        {
                            path : "/admin",
                            element : <Admin/>
                        }
                    ]
                }
                
            ]
        },
        {
            path : "/login",
            element : <Login/>
        },
        {
            path : "/signup",
            element : <SignUp/>
        }
    ]
)

export default Router

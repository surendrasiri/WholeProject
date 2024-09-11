import React from 'react'
import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export default function ProtectedRoute({role}) {

  const context = useOutletContext();
  console.log(context);
  if(!context.auth || context.role !== role){
    return <Navigate to={'/'} replace/>
  }
  return <Outlet/>

  // return (
  //   <div>
  //     <p>ProtectedRoute</p>
  //     <Outlet/>
  //   </div>
  // )
}

import React from 'react'
import { Navigate } from 'react-router'

export default function ProtectRoute({children}) {
  if (localStorage.getItem("token")){
    return children
  }
  else{
    return <Navigate to={"/login"}/>
  }
}

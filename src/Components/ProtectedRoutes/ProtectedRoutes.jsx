import React from 'react'
import style from './ProtectedRoutes.module.css'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes(props) {
 if(localStorage.getItem("Usertoken")){
    return props.children
 }
 else{
  return <Navigate to={"/login"} />

 }
}

import React from 'react';
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({children, isAdmin, isDoctor, isUser}) => {
  
  const email = JSON.parse(localStorage.getItem("email")) || null;
  const admin = JSON.parse(localStorage.getItem("admin")) || null;
  const doctor = JSON.parse(localStorage.getItem("doctor")) || null;
  const user = JSON.parse(localStorage.getItem("user")) || null;
  
  return(
    <>
      {email && (isAdmin || isDoctor || isUser) ? (
        
        children // Render children if email is valid and role matches
        
      ) : (
        <Navigate to="/registerUser" />
      )}
    </>
  )

}


import React, { createContext, useContext, useState } from 'react'

export const AuthContex = createContext() 
export default function AuthProvider({ children }) {
  const InitialAuthUser = localStorage.getItem("Users");
  const [authUser, setauthUser] = useState(
    InitialAuthUser ? JSON.parse(InitialAuthUser) : undefined
  )

  return(
    < AuthContex.Provider value = {[ authUser, setauthUser ]} >
        {children}
    </AuthContex.Provider>
  )
}

// Creating Custom Hook and Exporting It
export const useAuth =()=> useContext(AuthContex);
import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
import { useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()

const [userData, setUserData] = useState(null)

// const data = getLocalStorage()
useEffect(() => {
  setLocalStorage()
    const{employees, admin} = getLocalStorage()
    setUserData(employees)
    

  
}, [])






  return (
    <div>
    <AuthContext.Provider value={[userData,setUserData]}>
    {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
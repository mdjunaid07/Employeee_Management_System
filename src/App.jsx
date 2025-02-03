import React, { useContext } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()

  // }, )
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserdata] = useContext(AuthContext)

useEffect(()=>{
const loggedInUser = localStorage.getItem('loggedInUser', '')
if(loggedInUser){
  const userData = JSON.parse (loggedInUser)
  setUser(userData.role)
  setLoggedInUserData(userData.data)
}

}, [])
  
  // console.log(authData.employees)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //    if(loggedInUser){
  //     setUser(loggedInUser.role)
  //    }
  //   }


  // }, [authData])




  const handleLogin = (email, password) => {
    if (email == 'admin@e.com' && password == '123') {
      // console.log("admin logged in")
      setUser( 'admin' )
      // console.log(user)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser( 'employee' )
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee }))
      }
      // console.log("user logged in")

      // console.log(user)

    } else {
      alert("invalid credentials")
    }
  }
  // handleLogin('user@e.com','1233')




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)  }
  
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

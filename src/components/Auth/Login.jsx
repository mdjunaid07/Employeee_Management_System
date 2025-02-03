import React, { useState } from 'react'

export const Login = ({handleLogin}) => {

// console.log(handleLogin)


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submithandler = (e)=>{
    e.preventDefault()
     handleLogin(email,password)

    // console.log("email is", email)
    // console.log("password is", password)

    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
              submithandler(e)

              }}
            className='flex flex-col items-center justify-center '>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                  
                }}
                required 
                className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='enter your email'
                />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                  
                }}
                required
                className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='enter password' />
                <button className='mt-5 text-white outline-none border-none bg-emerald-700 hover:bg-emerald-500 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
               
            </form>
        </div>

    </div>
  )
}
export default Login
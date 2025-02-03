import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {


  // const [userName, setUserName] = useState('')
  // if (!data) {
  //   setUserName('Admin')
  // } else {

  //   setUserName(data.firstName)
  // }

const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  // window.location.reload()
  // console.log(props.changeUser);
  props.changeUser('')
  
}

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'>userName </span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white rounded-full px-5 py-2 border-spacing-12'>log out</button>

    </div>
  )
}

export default Header
import React, { useState } from 'react'

function Header(props) {

  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }
  // else{
  //   setusername(data.username)
  // }

  const logOutUser =()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className=' font-semibold text-3xl'>h &copy;</span></h1>
      <button onClick={logOutUser} className='bg-red-700  text-white px-5 py-2 rounded-sm text-lg font-medium'>Logout</button>
    </div>
  )
}

export default Header

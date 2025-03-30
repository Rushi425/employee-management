import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin);
    

    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')

    const submitHandle = (e) =>{
        // console.log("Hello");
        e.preventDefault();
        handleLogin(email, password)
        setemail('')
        setpassword('')
    }

  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-red-500'>
            <form onSubmit={(e) =>{
                submitHandle(e)
            }} 
            className='flex flex-col items-center justify-center border-emerald-600 p-20'>
                <input 
                value={email}
                onChange={(e) =>{
                    setemail(e.target.value)                    
                }} 
                required
                className='text-black outline-none bg-transparent border-2 text-xl border-emerald-500 px-4 py-4 rounded-full ' type="email" placeholder='Enter email'/>
                
                <input 
                value={password}
                onChange={(e) =>{
                    setpassword(e.target.value)
                }}
                required 
                className='text-black outline-none bg-transparent border-2 text-xl mt-4 border-emerald-500 px-4 py-4 rounded-full ' type="password" placeholder='Enter password'/>
                <button className=' text-white outline-none text-xl mt-4 bg-emerald-500 px-4 py-4 rounded-full ' type='submit '>Log In</button>
            </form>

        </div>
    </div>
  )
}

export default Login

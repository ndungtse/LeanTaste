import React, { useState } from 'react'
import { api } from '../contexts/AppContext';

function Helper() {
    const [info, setInfo]= useState({
        login: '', password: ''
    })

    const login = async(e)=>{
        e.preventDefault()
        const res = await api.post('/auth/signin', info)
        console.log(res);
    }

  return (
    <form onSubmit={login} className='flex flex-col mx-auto w-[50%]' >
        <input className='border-2 mt-4 border-black p-3'
        onChange={(e)=> setInfo({...info, login: e.target.value})}
         type="email" placeholder='email' />
        {/* <input className='border-2 mt-4 border-black p-3' 
        onChange={(e)=> setInfo({...info, firstName: e.target.value})}
        type="text" placeholder='firstname' />
        <input className='border-2 mt-4 border-black p-3' 
          onChange={(e)=> setInfo({...info, lastName: e.target.value})}
        type="text" placeholder='lastname' />
        <input className='border-2 mt-4 border-black p-3'
        onChange={(e)=> setInfo({...info, mobile: e.target.value})}
         type="text" placeholder='mobile' /> */}
        <input className='border-2 mt-4 border-black p-3'
        onChange={(e)=> setInfo({...info, password: e.target.value})}
         type="passowrd" placeholder='password' />
         <button type="submit" 
         className='border-2 bg-slate-600'>Submit</button>
    </form>
  )
}

export default Helper
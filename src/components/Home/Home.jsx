import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Menus/images/LeanTaste.png'
import good from '../Menus/images/good.png'
import hotel from '../Menus/images/hotel.png'
import reg from '../Menus/images/reg.png'
import './home.css'

function Home() {
  return (
    <div className='w-full home text-white flex flex-col h-screen p-6 bg-[#2b2a2a]'>
        <div className="flex flex-col">
            <img className='w-[20%] min-w-[150px] ' src={logo} alt="" />
            <p>Here to eat? Enjoy the food</p>
        </div>
        <h1 className="font-bold mt-[5vh] text-center text-4xl">
        Register  your restaurant in LeanTaste
        </h1>
        <p className='text-center text-2xl'
        >Our aim is to boost yur reastuarants to five stars and recommend it to various heavy clients</p>
        <div className="flex text-white
                justify-center mt-[15vh] mx-auto w-full items-center">
            <Link
                className='py-3 px-[10%]
                 hover:bg-green-800 bg-[#0B6041] rounded-lg border-2'
             to='/signup'>Register</Link>
            <Link
                className='py-3 hover:bg-green-800  ml-4 px-[7%] border-white rounded-lg border-2'
             to='/signup'> Already registered? Signin</Link>
        </div>
        <h1 className="text-3xl text-center mt-3">How it works</h1>
        <div className="grid card grid-cols-3  gap-4 px-[5%] mt-2">
            <div className=" bg-white h-[40vh]  text-black rounded-lg flex w-full flex-col items-center justify-center">
                <img className='w-[200px]' src={reg} alt="" />
                <h1 className="text-center text-3xl font-semibold">Step 1</h1>
                <p className="text-2xl text-center">Register your restaurant</p>
            </div>
            <div className=" bg-white h-[40vh]  text-black rounded-lg flex w-full flex-col items-center justify-center">
                <img className='w-[200px]' src={hotel} alt="" />
                <h1 className="text-center text-3xl font-semibold">Step 2</h1>
                <p className="text-2xl text-center">Create your restaurant Profile</p>
            </div>
            <div className=" bg-white h-[40vh]  text-black rounded-lg flex w-full flex-col items-center justify-center">
                <img className='w-[200px]' src={good} alt="" />
                <h1 className="text-center text-3xl font-semibold">Step 3</h1>
                <p className="text-2xl text-center">Start receiving orders</p>
            </div>
        </div>
    </div>
  )
}

export default Home
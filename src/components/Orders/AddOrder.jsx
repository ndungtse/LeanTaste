import React from 'react'
import { BiCheck, BiCheckCircle, BiPlus, BiPlusCircle } from 'react-icons/bi';

function AddOrder() {
  return (
    <div className='border-2 mb-4 w-full flex flex-col px-3 py-5'>
        <h1 className="text-xl font-semibold">Add Order</h1>
        <p className="text-slate-300">Manually</p>
        <div className="flex w-full my-3 items-center justify-between">
            <p className="text-slate-300">Create new order</p>
            <BiPlus className='text-[30px] py-1 px-1 bg-slate-300 rounded-full' />
        </div>
        <div className="flex flex-col w-full">
            <div className="flex w-full border-2 items-center justify-between p-3">
                <div className="flex items-center">
                    <input
                     className='hidden'
                     type="radio" name="order" id="order" />
                     <label htmlFor="order"><BiCheckCircle 
                     className='text-white bg-[#0B6041] cursor-pointer rounded-full text-2xl' /></label>
                    <p className="font-semibold ml-3">Dessert</p>
                </div>
                <div className="flex items-center
                  rounded-md text-white justify-center bg-[#0B6041] py-1 px-3">New</div>
            </div>
            <div className="flex w-full border-2 items-center justify-between p-3">
                <div className="flex items-center">
                    <input
                     className='hidden'
                     type="radio" name="order" id="order" />
                     <label htmlFor="order"><BiCheckCircle 
                     className='text-white bg-[#0B6041] cursor-pointer rounded-full text-2xl' /></label>
                    <p className="font-semibold ml-3">Dessert</p>
                </div>
                <div className="flex items-center
                  rounded-md text-white justify-center bg-[#0B6041] py-1 px-3">New</div>
            </div>
            <div className="flex w-full border-2 items-center justify-between p-3">
                <div className="flex items-center">
                    <input
                     className='hidden'
                     type="radio" name="order" id="order" />
                     <label htmlFor="order"><BiCheckCircle 
                     className='text-white bg-[#0B6041] cursor-pointer rounded-full text-2xl' /></label>
                    <p className="font-semibold ml-3">Dessert</p>
                </div>
                <div className="flex items-center
                  rounded-md text-white justify-center bg-[#0B6041] py-1 px-3">New</div>
            </div>
            <div className="flex w-full border-2 items-center justify-between p-3">
                <div className="flex items-center">
                    <input
                     className='hidden'
                     type="radio" name="order" id="order" />
                     <label htmlFor="order"><BiCheckCircle 
                     className='text-white bg-[#0B6041] cursor-pointer rounded-full text-2xl' /></label>
                    <p className="font-semibold ml-3">Dessert</p>
                </div>
                <div className="flex items-center
                  rounded-md text-white justify-center bg-[#0B6041] py-1 px-3">New</div>
            </div>
        </div>
    </div>
  )
}

export default AddOrder
import React, { useState } from 'react'

function Reg1({info, setInfo}) {
    
  return (
    <div className='w-[60%] flex flex-col items-center p-[3%]'>
        <div className="flex flex-col py-[5%] px-[6%] border-2">
            <h1 className="font-semibold text-left mt-4">Restaurant Information</h1>
            <input 
             onChange={(e)=> setInfo({...info, name: e.target.value})}
            className='px-3 mt-4 border-[1px] w-full outline-none py-1'
            type="text" placeholder='Restaurant Name' />
            <input 
            onChange={(e)=> setInfo({...info, completeName: e.target.value})}
            className='px-3 border-[1px] mt-4 w-full outline-none py-1'
            type="text" placeholder='Restaurant Complete Name' />
            <input 
            onChange={(e)=> setInfo({...info, email: e.target.value})}
            className='px-3 border-[1px] mt-4 w-full outline-none py-1'
            type="text" placeholder='Restaurant Email' />
            <input 
            onChange={(e)=> setInfo({...info, address: e.target.value})}
            className='px-3 border-[1px] mt-4 w-full outline-none py-1'
            type="text" placeholder='Restaurant Address' />
            <h1 className="font-semibold text-left mt-4">Contacts number of Restaurant</h1>
            <div className="flex px-2 border-[1px] mt-2 items-center">
                <p>250</p>
                <input
                    onChange={(e)=> setInfo({...info, phone: e.target.value})}
                    className='outline-none border-none px-3 py-1'
                 type="text" placeholder='Mobile Number' />
            </div>
            <h1 className="font-semibold text-left mt-4">Restaurant owner details</h1>
            <div className="flex px-2 border-[1px] mt-4 items-center">
                <p>250</p>
                <input
                    onChange={(e)=> setInfo({...info, ownerPhoneNumber: e.target.value})}
                    className='outline-none border-none px-3 py-1'
                 type="text" placeholder='Mobile Number' />
            </div>
            <div className="flex items-center w-full justify-between mt-4">
                <input
                 onChange={(e)=> setInfo({...info, ownerNames: e.target.value})}
                 className='px-3 w-[150px] border-[1px]  outline-none py-1'
                type="text" placeholder='Owner Name' />
                <input
                 onChange={(e)=> setInfo({...info, ownerEmail: e.target.value})}
                 className='px-3 ml-4 border-[1px] w-full outline-none py-1'
                type="text" placeholder='Restaurant owner Email' />
            </div>
        </div>
    </div>
  )
}

export default Reg1
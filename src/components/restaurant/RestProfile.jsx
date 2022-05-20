import React, { useState } from "react";
import { BiBell, BiSearch, BiUser } from "react-icons/bi";
import Reg1 from "./reg1";
import Reg2 from "./reg2";
import Reg3 from "./reg3";

function RestProfile() {
  const [step, setStep]= useState(1)
  const [info, setInfo] = useState({
      name: '', category: 'Restaurant', completeName: '', ownerEmail: '',
      phone: '', ownerNames: '', ownerPhoneNumber: '', email: '',
      closingHour: '', openingHour: '', address: '' 
  })
  
  return (
    <>
      <div className="w-full flex items-center justify-between px-[3%] shadow-md h-[70px] shadow-gray-400">
        <div className="logo">
          <p className="text-3xl">
            Lean<span className="text-orange-500">Taste</span>
          </p>
        </div>
        <div className="flex">
          <div className="flex text-2xl items-center border-r-2 border-black">
            <BiSearch className="mr-5" />
            <BiBell className="mr-5" />
          </div>
          <p className="ml-3">Kagabo Jaques</p>
          <BiUser className="ml-3 text-2xl" />
        </div>
      </div>
      <div className="flex holder  w-full">
        <div className="flex flex-col w-[40%] min-w-[300px] items-end px-4 pt-3">
          <div className="border-[1px] py-3 w-[300px]">
            <h1 className="font-semibold">1.Create your restaurant profile</h1>
            <div
            onClick={()=> setStep(1)}
             className={`flex mt-7 items-center pl-3 cursor-pointer ${step===1?'border-l-4 border-[#0B6041]':''} `}>
              <p className="p-1 text-xl text-white bg-[#0B6041] rounded-full px-3">1</p>
              <div className="flex flex-col items-start ml-5">
                <h1 className="font-semibold mb-3">Restaurant Information</h1>
                <p className="flex justify-start text-left">Restaurant name, address Details, owner details</p>
              </div>
            </div>
            <div
             onClick={()=> setStep(2)}
             className={`flex mt-7 items-center pl-3 cursor-pointer ${step===2?'border-l-4 border-[#0B6041]':''} `}>
              <p className="p-1 text-xl text-white bg-[#0B6041] rounded-full px-3">2</p>
              <div className="flex flex-col items-start ml-5">
                <h1 className="font-semibold mb-3">Restaurant Type &amp; Timings</h1>
                <p>Establishment, food images</p>
              </div>
            </div>
            <div
            onClick={()=> setStep(3)}
             className={`flex mt-7 items-center pl-3 cursor-pointer ${step===3?'border-l-4 border-[#0B6041]':''} `}>
              <p className="p-1 text-xl text-white bg-[#0B6041] rounded-full px-3">3</p>
              <div className="flex flex-col items-start ml-5">
                <h1 className="font-semibold mb-3">Create your menu</h1>
                <p>Menu, restaurant, food images</p>
              </div>
            </div>
          </div>
        </div>
        {step ===1 && <Reg1 info={info} setInfo={setInfo} />}
        {step ===2 && <Reg2 info={info} setInfo={setInfo} />}
        {step ===3 &&( <Reg3/> )}
      </div>
    </>
  );
}

export default RestProfile;

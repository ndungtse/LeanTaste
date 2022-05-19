import React, { useState } from "react";
import {
  BiCart,
  BiCog,
  BiGrid,
  BiGridAlt,
  BiMenu,
  BiTable,
  BiUser,
} from "react-icons/bi";

function SideBar() {
  const [mobile, setMobile] = useState(false)

  return (
    <>
    <BiMenu
    onClick={()=> setMobile(!mobile)}
     className={` ${mobile && 'text-white'} z-10 hidden menu cursor-pointer absolute top-2 left-3 text-3xl`} />
    <div className={`${mobile && 'show'}
      duration-500 sidebar h-full py-8 bg-black w-[200px] flex flex-col justify-between`}>
      <h1 className="text-3xl flex justify-center w-full font-bold text-white">
        <p>Lean</p> <span className="text-[#0B6041]">Taste</span>
      </h1>
      <div className="flex flex-col w-full items-center px-3 text-white">
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-[#0B6041]">
          <BiGridAlt />
          <p className="ml-6">Overview</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-[#0B6041]">
          <BiTable />
          <p className="ml-6">Table</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-[#0B6041]">
          <BiCart />
          <p className="ml-6">Orders</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-[#0B6041]">
          <BiMenu />
          <p className="ml-6">Menu</p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center px-3 text-white">
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-[#0B6041]">
          <BiCog />
          <p className="ml-6">Settings</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-[#0B6041]">
          <BiUser />
          <p className="ml-6">Account</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default SideBar;

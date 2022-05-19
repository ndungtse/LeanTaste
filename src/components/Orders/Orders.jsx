import React, { useState } from "react";
import SideBar from "../SideBar";
import { BiBell, BiDotsHorizontalRounded, BiSearch, BiUser } from "react-icons/bi";
import Order from "./Order";
import AddOrder from "./AddOrder";

function Orders() {
  const [show, setShow]= useState(false)


  return (
    <div className="w-full h-screen flex overflow-hidden">
      <SideBar />
      <BiDotsHorizontalRounded  onClick={()=> setShow(!show)}
      className={`absolute hidden dots text-3xl z-10 right-3 top-[130px] cursor-pointer`} />
      <div
       className="flex all flex-col overflow-hidden w-full bg-slate-200 h-full pl-10">
        <div
        onClick={()=> setShow(false)} 
        className="flex w-full mt-7 overflow-hidden px-4 items-center justify-between">
          <p className="text-3xl font-semibold">Orders</p>
          <div className="flex">
            <div className="flex text-2xl items-center border-r-2 border-black">
              <BiSearch className="mr-5" />
              <BiBell className="mr-5" />
            </div>
            <p className="ml-3">Kagabo Jaques</p>
            <BiUser className="ml-3 text-2xl" />
          </div>
        </div>
        <div className="flex bg-white  mt-[60px] h-full w-full">
        <div
        onClick={()=> setShow(false)}
         className="flex olist flex-col w-3/5 pl-8 min-w-[50%]">
            <div className="flex items-center">
                <div className="flex flex-col oh1 items-start pt-4">
                    <h1 className="text-2xl font-semibold">Orders</h1>
                    <p className="text-slate-500">as of 25 May 2022, 09:41 PM</p>
                </div>
                <div className="flex ot items-center ml-[6%]">
                    <button className="p-2 w-[100px] px-4 text-white
                    mx-2 bg-[#0B6041] border-4 border-[#0B6041] rounded-lg">New</button>
                    <button className="p-2 w-[100px] px-4 
                    mx-2 text-[#0b6041]  border-4 border-[#0B6041] rounded-lg">Delivered</button>
                    <button className="p-2 w-[100px] px-4 
                    mx-2 text-[#0b6041]  border-4 border-[#0B6041] rounded-lg">Rejected</button>
                    <button className="p-2 w-[100px] px-4 
                    mx-2 text-[#0b6041]  border-4 border-[#0B6041] rounded-lg">All</button>
                </div>
            </div>
            <div className=" olist overflow-auto">
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
              <Order />
            </div>
        </div>
         <div className={`w-2/5 scr1 leftorder flex px-3 flex-col items-center
              overflow-auto duration-500 h-[80vh] ${show &&'showleft'}`}>
             <div className="flex flex-col mt-10">
                 <p className="text-xl">Delivered</p>
                 <h1 className="text-[4em] font-semibold">6</h1>
             </div>
             <div className="flex flex-col mt-10">
                 <p className="text-xl">Rejected</p>
                 <h1 className="text-[4em] font-semibold">12</h1>
             </div>
             <div className="flex flex-col mt-10">
                 <p className="text-xl">All</p>
                 <h1 className="text-[4em] font-semibold">18</h1>
             </div>
         <AddOrder />
         
         </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;

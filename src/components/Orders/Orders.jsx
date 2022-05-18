import React from "react";
import SideBar from "../SideBar";
import { BiBell, BiSearch, BiUser } from "react-icons/bi";
import Order from "./Order";

function Orders() {
  return (
    <div className="w-full h-screen flex">
      <SideBar />
      <div className="flex flex-col w-full bg-slate-200 h-full pl-10">
        <div className="flex w-full mt-7 px-4 items-center justify-between">
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
        <div className="flex flex-col w-3/5 pl-8 min-w-[50%]">
            <div className="flex items-center">
                <div className="flex flex-col items-start pt-4">
                    <h1 className="text-2xl font-semibold">Orders</h1>
                    <p className="text-slate-500">as of 25 May 2022, 09:41 PM</p>
                </div>
                <div className="flex items-center ml-[6%]">
                    <button className="p-2 w-[100px] px-4 text-white
                    mx-2 bg-green-900 rounded-lg">New</button>
                    <button className="p-2 w-[100px] px-4 text-white
                    mx-2 bg-green-900 rounded-lg">Delivered</button>
                    <button className="p-2 w-[100px] px-4 text-white
                    mx-2 bg-green-900 rounded-lg">Rejected</button>
                    <button className="p-2 w-[100px] px-4 text-white
                    mx-2 bg-green-900 rounded-lg">All</button>
                </div>
            </div>
            <Order />
        </div>
         <div className="w-2/5 fle flex-col items-center">
             <div className="flex flex-col mt-10">
                 <p>Delivered</p>
                 <h1 className="text-4xl font-semibold">6</h1>
             </div>
             <div className="flex flex-col mt-10">
                 <p>Delivered</p>
                 <h1 className="text-4xl font-semibold">6</h1>
             </div>
             <div className="flex flex-col mt-10">
                 <p>Delivered</p>
                 <h1 className="text-4xl font-semibold">6</h1>
             </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;

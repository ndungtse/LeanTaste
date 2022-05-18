import React from "react";
import { BiPlus } from "react-icons/bi";

function Reg3() {
  return (
    <div className="w-[60%] flex flex-col items-center p-[3%]">
      <div className="flex flex-col py-[5%] px-[6%] border-2">
        <div className="flex items-center">
          <button className="p-2 px-4 text-white
          mx-2 bg-green-900 rounded-2xl">Name</button>
          <button className="p-2 px-4 text-white
          mx-2 bg-green-900 rounded-2xl">Name</button>
          <button className="p-2 px-4 text-white
          mx-2 bg-green-900 rounded-2xl">Name</button>
          <button className="p-2 px-4 text-white
          mx-2 bg-green-900 rounded-2xl">Name</button>
          <button className="p-2 px-4 text-white
          mx-2 bg-green-900 rounded-2xl">Name</button>
        </div>
        <div className="flex flex-col items-start mt-4">
          <label htmlFor="">Name</label>
          <input
            className="border-b-2 h-11 w-full outline-none"
            type="text"
            placeholder="Menu Name"
          />
        </div>
        <div className="flex flex-col items-start mt-4">
          <label htmlFor="">Price</label>
          <input
            className="border-b-2 w-full h-11 outline-none"
            type="text"
            placeholder="RWF"
          />
        </div>
        <div className="flex flex-col w-full mt-4 items-start">
          <label htmlFor="">Menu description</label>
          <input
            className="border-b-2 w-full h-11 outline-none"
            type="text"
            placeholder="Menu description"
          />
        </div>
        <div className="flex flex-col items-start mt-4">
          <label htmlFor="">Image</label>
          <label
            htmlFor="file"
            className="w-full border-2 h-10 flex items-center 
        cursor-pointer mt-5 justify-center border-b-2"
          >
            Upload Image
          </label>
          <input type="file" className="hidden" id="file" />
        </div>
        <div className="flex mx-auto items-center mt-6">
            <p className="px-3 py-2 border-2">Add more</p>
            <BiPlus className="text-4xl text-green-900"/>
        </div>
      </div>
    </div>
  );
}

export default Reg3;

import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import logo from '../Menus/images/LeanTaste.png'

function ClientReg() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex m-4 flex-col w-full items-center justify-center">
        <img className="w-[20%] p-3 bg-[#0B6041] min-w-[150px] " src={logo} alt="" />
        <p className="font-bold">Add Client</p> 
      </div>
    <form className="w-1/2 min-w-[280px] mx-auto flex flex-col">
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Client</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Client Name"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Category</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Choose category"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Presentation</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Names"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Date of creation</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Month &amp; yaer"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Address</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Province, District, Sector, Cell"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Email</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Phone</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className=" ml-1 font-semibold" htmlFor="">Bank Account (IBAN)</label>
        <input
          className="outline-none bg-transparent nput mt-2 border-b-2 border-gray-500"
          type="text"
          placeholder="Bank Account"
        />
      </div>
      <button className="px-3 py-1 rounded-md bg-[#0B6041]" type="submit">
        Add Client
      </button>
    </form>
    </div>
  );
}

export default ClientReg;

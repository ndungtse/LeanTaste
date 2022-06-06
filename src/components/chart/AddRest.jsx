import React from "react";
import { BiCircle, BiCheckCircle, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function AddRest() {
  return (
    <div className="flex flex-col bg-white  rounded-lg w-2/6 border-[1px]  m-3 border-solid border-gray-200">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-10 mt-5">
            <p className="font-bold flex">Create 
            <Link to='/addrestaurant'><BiPlus
             className="bg-slate-200 text-2xl rounded-xl cursor-pointer ml-2" />
             </Link></p>
            <p className="font-light text-blue-200">Today</p>
          </div>
          <div className="font-bold  text-green-800 mr-10 mt-5">View All</div>
        </div>
        <div className="flex flex-col">
          <div className="text-blue-200 font-light text-left pl-10 py-5">
            {" "}
            Create New
          </div>
        </div>
        <div className="flex w-full border-2 items-center justify-between p-3">
          <div className="flex items-center">
            <input
              className="  clickable "
              type="radio"
              name="restaurant"
              id="rest"
            />
            <label
              className="label4 rounded-full border-2 border-gray-500"
              htmlFor="rest"
            >
              <BiCheckCircle className="text-white label4 cursor-pointer rounded-full text-2xl" />
            </label>
            <p className="font-semibold ml-3">Restaurants</p>
          </div>
          <div
            className="flex items-center
                  rounded-md text-white justify-center bg-[#0B6041] py-1 px-3"
          >
            New
          </div>
        </div>
        <div className="flex w-full border-2 items-center justify-between p-3">
          <div className="flex items-center">
            <input
              className="  clickable "
              type="radio"
              name="restaurant"
              id="rest1"
            />
            <label
              className="label4 rounded-full border-2 border-gray-500"
              htmlFor="rest1"
            >
              <BiCheckCircle className="text-white label4 cursor-pointer rounded-full text-2xl" />
            </label>
            <p className="font-semibold ml-3">Hotel</p>
          </div>
          <div
            className="flex items-center
                  rounded-md text-white justify-center bg-[#0B6041] py-1 px-3"
          >
            New
          </div>
        </div>
        <div className="flex w-full border-2 items-center justify-between p-3">
          <div className="flex items-center">
            <input
              className="  clickable "
              type="radio"
              name="restaurant"
              id="rest2"
            />
            <label
              className="label4 rounded-full border-2 border-gray-500"
              htmlFor="rest2"
            >
              <BiCheckCircle className="text-white label4 cursor-pointer rounded-full text-2xl" />
            </label>
            <p className="font-semibold ml-3">Pub</p>
          </div>
          <div
            className="flex items-center
                  rounded-md text-white justify-center bg-[#0B6041] py-1 px-3"
          >
            New
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRest;

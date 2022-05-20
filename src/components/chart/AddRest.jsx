import React from "react";
import { BiCircle } from "react-icons/bi";

function AddRest() {
  return (
    <div className="flex flex-col bg-white  rounded-lg w-2/6 border-[1px]  m-3 border-solid border-gray-200">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-10 mt-5">
            <p className="font-bold">Create</p>
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
        <div className="flex flex-row justify-between m-5">
          <div className="ml-10">Restaurants</div>
          <button className="bg-green-800 text-white rounded-full mr-10 w-14">
            New
          </button>
        </div>
        <div className="flex flex-row items-center justify-between m-5">
          <div className="flex items-center ml-3">
            <BiCircle className="mr-2" />
            Restaurants
          </div>
          <button className="bg-green-800 text-white rounded-full mr-10 w-14">
            New
          </button>
        </div>
        <div className="flex flex-row justify-between m-5">
          <div className="ml-10">Restaurants</div>
          <button className="bg-green-800 text-white rounded-full mr-10 w-14">
            New
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRest;

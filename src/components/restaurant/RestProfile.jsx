import React from "react";
import { BiBell, BiSearch, BiUser } from "react-icons/bi";

function RestProfile() {
  return (
    <>
    <div className="w-full flex items-center justify-between px-[3%] shadow-md h-[70px] shadow-gray-400">
      <div className="logo">
        <p className="text-3xl">
          SUpa<span className="text-orange-500">Menu</span>
        </p>
      </div>
      <div className="flex">
        <div className="flex text-2xl items-center border-r-2 border-black">
          <BiSearch className="mr-5"/>
          <BiBell className="mr-5" />
        </div>
        <p className="ml-3">Kagabo Jaques</p>
        <BiUser className="ml-3 text-2xl" />
      </div>
    </div>
    <div className="flex w-full">
      <div className="flex flex-col items-start px-4 pt-3">
        <div className="border-[1px] py-3 px-2">
          <h1 className="font-semibold">
            1.Create your restaurant profile
          </h1>
          <div className="flex"></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RestProfile;

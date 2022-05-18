import React from "react";
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
  return (
    <div className="h-full py-8 bg-black w-[200px] flex flex-col justify-between">
      <h1 className="text-3xl flex justify-center w-full font-bold text-white">
        <p>Lean</p> <span className="text-orange-500">Taste</span>
      </h1>
      <div className="flex flex-col w-full items-center px-3 text-white">
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-orange-500">
          <BiGridAlt />
          <p className="ml-6">Overview</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-orange-500">
          <BiTable />
          <p className="ml-6">Table</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-orange-500">
          <BiCart />
          <p className="ml-6">Ordes</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-orange-500">
          <BiMenu />
          <p className="ml-6">Menu</p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center px-3 text-white">
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-orange-500">
          <BiCog />
          <p className="ml-6">Settings</p>
        </div>
        <div className="flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-orange-500">
          <BiUser />
          <p className="ml-6">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

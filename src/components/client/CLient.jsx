import React from "react";
import SideBar from "../SideBar";
import {
  BiBell,
  BiPlus,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import Row from "./Row";
import { Link } from "react-router-dom";
import { useRest } from "../contexts/RestContexts";

function Cli() {
  const { user } = useRest()

  return (
    <div className="flex fixed w-full h-screen">
      <SideBar active={`clients`} />
      <div className="w-full flex flex-col h-full">
        <div className="flex w-full mt-7  px-4 items-center justify-between">
          <p className="text-3xl font-semibold">Clients</p>
          <div className="flex">
            <div className="flex text-2xl items-center border-r-2 border-black">
              <BiSearch className="mr-5" />
              <BiBell className="mr-5" />
            </div>
            <p className="ml-3">{user.name}</p>
            <BiUser className="ml-3 text-2xl" />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-2/3 mx-auto">
          <label className=" ml-1 font-semibold" htmlFor="">
            New Client
          </label>
          <div className="flex items-center w-full">
            <input
              className="outline-none w-full nput mt-2 border-b-2 border-gray-500"
              type="text"
              placeholder="Add a new client"
            />
            <Link to='/regclient'>
            <BiPlus className="p-1 text-3xl bg-slate-200 rounded-full cursor-pointer ml-2" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-8 w-full">
          <div className="flex items-center justify-between px-4">
            <p className="text-xl">All Clients</p>
            <div className="flex items-center">
              <p>Sort</p>
              <p className="text-2xl font-semibold ml-5">Filter</p>
            </div>
          </div>
          <table className="w-full mt-9">
            <thead>
              <tr>
                <th>CLient details</th>
                <th>Sales</th>
                <th>Detailed report</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <Row />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cli;

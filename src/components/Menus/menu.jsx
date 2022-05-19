import React, { useState } from "react";
import "./menu.css";
import Box from "./box";
import { BiPlus, BiSearch,BiDotsHorizontalRounded, BiUser, BiBell } from "react-icons/bi";
import Image1 from "./images/image1.jpg";
import SideBar from "../SideBar";
import "../Orders/order.css";
import { useApp } from "../contexts/AppContext";

export default function Menu() {
  const [show, setShow] = useState(false);
  const { menus } = useApp();
  console.log(menus);

  return (
    <>
      <BiDotsHorizontalRounded
        onClick={() => setShow(!show)}
        className="text-3xl z-[2] hidemenu hidden
         cursor-pointer absolute top-[19vh] right-2"
      />

      <div className="flex bg-[#F2F5FF] h-[100vh] w-full overflow-hidden">
        <SideBar active={`menu`} />
        <div className="w-full h-full bg-[#F2F5FF]">
          <div
            onClick={() => setShow(false)}
            className="flex items-center justify-between w-[300px] h-[6vh] absolute right-0 mr-24 mt-10 nav"
          >
            <div className="flex mr-4">
              <div className="flex text-2xl items-center border-r-2 border-black">
                <BiSearch className="mr-5" />
                <BiBell className="mr-5" />
              </div>
              <p className="ml-3">Kagabo Jaques</p>
              <BiUser className="ml-3 text-4xl" />
            </div>
          </div>
          <div className=" flex flex-col w-[97%] h-screen  bg-[white] pl-3 my-auto mx-auto mt-36 rounded-md overflow-y-auto relative menu1">
            <div className="w-6/6 flex" onClick={() => setShow(false)}>
              <div className="flex flex-col items-start w-2/6 mt-3 ml-10">
                <h2 className="font-bold">Menus</h2>
                <h3 className="text-[#A7AFCA]">as of 25 May 2022, 09:41 PM</h3>
              </div>
              <div className="flex menubtns items-center justify-between h-6/6 ml-5 mt-3">
                <button className="text-[#fff] h-10 w-24 rounded-md bg-[#0B6041]">
                  Drink
                </button>
                <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">
                  Starter
                </button>
                <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">
                  Appetizer
                </button>
                <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">
                  Dessert
                </button>
                <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">
                  Main
                </button>
              </div>
            </div>
            <div className="flex w-full h-full overflow-y-auto mt-10">
              <div
                onClick={() => setShow(false)}
                className="flex flex-col menud w-3/5 h-[65vh]  overflow-y-auto"
              >
                {menus.map((menu, index) => (
                  <Box
                  key={index}
                    menu={menu}
                    img={Image1}
                  />
                ))}
              </div>
              <div
                className={`w-2/5 leftmenu h-[60vh] border-[1px] border-solid border-[#A8B2D2] ml-10 mt-3 ${
                  show && "lmenu"
                }`}
              >
                <div className=" flex flex-col items-start justify-around w-full h-[20vh] border-[1px] border-solid border-[#A8B2D2]">
                  <h2 className="font-bold ml-10">Add Item</h2>
                  <div className="w-full flex items-center justify-between">
                    <h3 className="ml-10 text-[#9AA7D3] ">
                      Create new menu item
                    </h3>
                    <BiPlus className="bg-slate-300 mr-3 rounded-full text-3xl" />
                  </div>
                </div>
                <div className=" flex items-center pl-5 w-full h-[8vh] border-[1px] border-solid border-[#A8B2D2]">
                  <div className="w-5 h-5 rounded-full border-[1px] border-solid border-[#A8B2D2]"></div>
                  <h2 className="ml-6 mb-1">Dessert</h2>
                </div>
                <div className="flex  items-center w-full pl-5 h-[8vh] border-[1px] border-solid border-[#A8B2D2]">
                  <div className="w-5 h-5 rounded-full border-[1px] border-solid border-[#A8B2D2]"></div>
                  <h2 className="ml-6 mb-1">Main</h2>
                </div>
                <div className="flex items-center w-full pl-5 h-[8vh] border-[1px] border-solid border-[#A8B2D2]">
                  <div className="w-5 h-5 rounded-full border-[1px] border-solid border-[#A8B2D2]"></div>
                  <h2 className="ml-6 mb-1">Drink</h2>
                </div>
                <div className="flex items-center w-full pl-5 h-[8vh] border-[1px] border-solid border-[#A8B2D2]">
                  <div className="w-5 h-5 rounded-full border-[1px] border-solid border-[#A8B2D2]"></div>
                  <h2 className="ml-6 mb-1">Appetizer</h2>
                </div>
                <div className="flex items-center w-full pl-5 h-[8vh] border-[1px] border-solid border-[#A8B2D2]">
                  <div className="w-5 h-5 rounded-full border-[1px] border-solid border-[#A8B2D2]"></div>
                  <h2 className="ml-6 mb-1">Starter</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

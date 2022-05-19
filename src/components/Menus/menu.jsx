import React from "react"
import './menu.css'
import Box from "./box"
import {BiPlus, BiSearch, BiBell} from 'react-icons/bi'
import Image1 from "./images/image1.jpg"
import Image2 from "./images/image2.jpg"
import Image3 from "./images/image3.jpg"
import Image4 from "./images/image4.jpg"
import Image5 from "./images/image5.jpg"
import Image6 from "./images/image6.jpg"
import Image7 from "./images/image7.jpg"
import Image8 from "./images/image8.jpg"
import Profile from "./images/profile.jpg"
import SideBar from "../SideBar"

export default function Menu() {
    return (
        <div className="flex bg-[#F2F5FF] h-[100vh] overflow-hidden">
            
             <SideBar  active={`menu`} />
        <div className="w-5/6 h-full bg-[#F2F5FF]">
            <div className="flex items-center justify-between w-1/6 h-[6vh] absolute right-0 mr-24 mt-10 nav" >
                <div className="flex items-center justify-around w-2/6 h-5/6 border-r-2 border-solid border-[#0B6041]">
                <BiSearch className="text-[#000] text-xl"/>
<BiBell className="text-[#000] text-xl"/>
                </div>
<h3>Jacques Kagabo</h3>
<div className="flex h-10 w-10 rounded-full"><img src={Profile} alt="" className="rounded-full object-cover w-full h-full object-top"/></div>
            </div>
            <div className=" flex flex-col w-11/12 h-screen bg-[#fff] my-auto mx-auto mt-36 rounded-md overflow-y-auto relative">
                <div className="w-6/6 flex">
                    <div className="flex flex-col items-start w-2/6 mt-3 ml-10">
                    <h2 className="font-bold">Menus</h2>
                    <h3 className="text-[#A7AFCA]">as of 25 May 2022, 09:41 PM</h3>
                    </div>
                    <div className="flex items-center justify-between h-6/6 ml-5 mt-3">
                        <button className="text-[#fff] h-10 w-24 rounded-md bg-[#0B6041]">Drink</button>
                        <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">Starter</button>
                        <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">Appetizer</button>
                        <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">Dessert</button>
                        <button className="text-[#0B6041] h-10 w-24 rounded-md border-solid border-2 border-[#0B6041] ml-1">Main</button>
                    </div>
                </div>
                <div className="flex w-6/6 h-full overflow-y-auto mt-10">
                <div className="flex flex-col w-5/12 h-[65vh] ml-52 overflow-y-auto">
                <Box
                 descr="Carbonated Water, Phosphoric Acid" 
                 title="Coca Cola - 250 ml" 
                 amt="Frw 5,000" img={Image1} 
                 />
                <Box 
                descr="Carbonated Water, Phosphoric Acid" 
                title="Miitziig - 750 ml" 
                amt="Frw 6,000" 
                img={Image2} />
                <Box 
                descr="Carbonated Water, Phosphoric Acid" 
                title="SKOL - 250 ml"
                 amt="Frw 8,000"
                  img={Image3} />
                <Box 
                descr="Carbonated Water, Phosphoric Acid" 
                title="Heineken- 250 ml"
                 amt="Frw 5,000"
                  img={Image4} />
                <Box 
                descr="Carbonated Water, Phosphoric Acid" 
                title="Yoghurt - 500 ml" 
                amt="Frw 6,000" 
                img={Image5} />
                <Box 
                descr="Carbonated Water, Phosphoric Acid" 
                title="Juice - 500 ml"
                 amt="Frw 6,000" 
                 img={Image6} />
                <Box 
                descr="Carbonated Water, Phosphoric Acid"
                 title="Pepsi - 500 ml"
                  amt="Frw 6,000"
                   img={Image7} />
                <Box 
                descr="Carbonated Water, Phosphoric Acid" 
                title="Fanta - 250 ml" 
                amt="Frw 6,000" 
                img={Image8} />
                </div>
                <div className="w-4/12 h-[60vh] border-[1px] border-solid border-[#A8B2D2] ml-10 mt-3">
                    <div className=" flex flex-col items-start justify-around w-full h-[20vh] border-[1px] border-solid border-[#A8B2D2]">
                        <h2 className="font-bold ml-10">Add Item</h2>
                        <div className="w-4/6 flex items-center justify-between">
                        <h3 className="ml-10 text-[#9AA7D3] ">Create new menu item</h3>
                        <BiPlus className=""/>
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



    )
}
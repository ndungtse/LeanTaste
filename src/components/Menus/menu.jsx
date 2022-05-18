import React from "react"
import { BiPlus } from 'react-icons/bi'
import Box from "./box"
import Image1 from "./images/image1.jpg"
export default function Menu() {
    return (
        <div className="flex">
             <div className="w-1/6 h-screen bg-[#0B6041]">
            <div className="w-6/6 h-3/5 bg-[#000]"></div>
        </div>
        <div className="w-5/6 h-full bg-[#F2F5FF]">
            <div className=" flex flex-col w-11/12 h-screen bg-[#fff] my-auto mx-auto mt-36 rounded-md">
                <div className="w-6/6 h-1/6 bg-[yellow]"></div>
                <div className="flex w-6/6 h-full bg-[#fff] mt-10">
                <div className="flex w-2/5 h-full ml-52">
                <Box descr="Carbonated Water, Phosphoric Acid" title="Coca Cola" amt="Frw 5000"img={Image1}/>
                </div>
                <div className="w-4/12 h-5/6 bg-[#fff] ml-10"></div>
                </div>
            </div>
        </div>
        </div>



    )
}
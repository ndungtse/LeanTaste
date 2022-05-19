import React from "react"

export default function Box(props) {
    return (
    <div className=" flex items-center justify-between w-12/12 mt-2 h-[15vh] bg-[#F2F5FF] rounded-lg">
        <div className="h-4/5 w-1/4 rounded-full"><img className="h-full w-full object-cover rounded-sm ml-6"src={props.img}/></div>
        <div className="flex items-start flex-col mr-6">
            <h3 className="text-[#424242]">{props.descr}</h3>
            <h2 className="font-semibold">{props.title}</h2>
            <h2 className="font-bold text-[#0B6041] mt-2">{props.amt}</h2>
        </div>
    </div>
    )
}
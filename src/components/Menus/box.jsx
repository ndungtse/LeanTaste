import React from "react"

export default function Box(props) {
    return (
    <div className=" flex items-center justify-around w-11/12 ml-5 mt-2 h-1/5 bg-[#F2F5FF] rounded-xs">
        <div className="h-4/5 bg-[green]"><img className="h-full w-full"src={props.img}/></div>
        <div className="flex flex-col mr-14 bg-[red]">
            <h3 className="text-[#424242]">{props.descr}</h3>
            <h2 className="font-bold text-lg mr-40">{props.title}</h2>
            <h2 className="font-bold text-[#0B6041] mr-44 ">{props.amt}</h2>
        </div>
    </div>
    )
}
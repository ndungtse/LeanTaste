import React from "react";

export default function Box({menu,img}) {
  return (
    <div className=" flex items-center  w-full mx-auto mt-2 h-[15vh] bg-[#F2F5FF] rounded-lg">
      <div className="h-4/5 w-1/3 max-w-[200px] rounded-full">
        <img
          className="h-full aspect-square object-cover rounded-sm"
          src={'https://png.pngitem.com/pimgs/s/20-208446_restaurant-menu-icon-png-restaurant-menu-food-menu.png'}
        />
      </div>
      <div className="flex mx-auto flex-col">
        <h3 className="text-[#424242]">{menu.description}</h3>
        <h2 className="font-semibold">{menu.name}</h2>
        <h2 className="font-bold text-[#0B6041] mt-2">RWF {menu.unitPrice}</h2>
      </div>
    </div>
  );
}

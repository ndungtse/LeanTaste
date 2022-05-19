import React from "react";

function Reg2() {
  return (
    <div className="w-[60%] flex flex-col items-center p-[3%]">
      <div className="flex flex-col w-full min-w-[300px] py-[5%] px-[6%] border-2">
        <h1 className="font-semibold text-left mt-4">
          Restaurant Type (restaurant, pub, hotel, other)
        </h1>
        <select className="border-2 h-12 px-3 mt-4 w-full outline-none">
          <option value="" disabled selected hidden>
            Restaurant
          </option>
        </select>
        <select className="border-2 h-12 px-3 mt-4 w-full outline-none">
          <option value="" disabled selected hidden>
            African
          </option>
        </select>
        <h1 className="font-semiblod mt-4">Opening Hours</h1>
        <div className="flex items-center">
          <div className="flex px-2 h-10 border-[1px] mt-4 items-center">
            <p>From</p>
            <input
              className="outline-none border-none px-3 py-1"
              type="text"
              placeholder="7 : 00"
            />
          </div>
          <div className="flex ml-4 h-10 px-2 border-[1px] mt-4 items-center">
            <p>To</p>
            <input
              className="outline-none
                border-none px-3 py-1"
              type="text"
              placeholder="14 : 00"
            />
          </div>
        </div>
        <h1 className="font-semibold mt-3">Upload Images (pictures or logo)</h1>
        <input type="file" className="hidden" id="file"/>
        <label htmlFor="file" className="w-full border-2 h-10 flex items-center 
        cursor-pointer mt-5 justify-center"
        >Choose Images</label>
      </div>
    </div>
  );
}

export default Reg2;

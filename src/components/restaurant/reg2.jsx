import React from "react";

function Reg2({info, setInfo}) {
  return (
    <div className="w-[60%] flex flex-col items-center p-[3%]">
      <div className="flex flex-col w-full min-w-[300px] py-[5%] px-[6%] border-2">
        <h1 className="font-semibold text-left mt-4">
          Restaurant Type (restaurant, pub, hotel, other)
        </h1>
        <select
          onChange={(e)=> setInfo({...info, category: e.target.value})}
         className="border-2 cursor-pointer h-12 px-3 mt-4 w-full outline-none">
          <option value="" disabled selected hidden>
            Restaurant
          </option>
          <option value="Restaurant">Restaurant</option>
          <option value="Motel">Motel</option>
          <option value="Hotel">Hotel</option>
        </select>
        <select 
        className="border-2 h-12 px-3 mt-4 w-full outline-none">
          <option value="" disabled selected hidden>
            African
          </option>
        </select>
        <h1 className="font-semiblod mt-4">Opening Hours</h1>
        <div className="flex items-center w-full inpu2">
          <div className="flex px-2 h-10 border-[1px] mt-4 items-center">
            <p>From</p>
            <input
              onChange={(e)=> setInfo({...info, openingHour: e.target.value})}
              className="outline-none border-none px-3 py-1"
              type="text"
              placeholder="7 : 00"
            />
          </div>
          <div className="flex ml-4 h-10 px-2 border-[1px] mt-4 items-center">
            <p>To</p>
            <input
              onChange={(e)=> setInfo({...info, closingHour: e.target.value})}
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
        <button
        className="px-3 mt-3 text-white py-2 bg-[#0B6041]"
        >Add A Profile</button>
      </div>
    </div>
  );
}

export default Reg2;

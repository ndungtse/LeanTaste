import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

function Row() {
  return (
    <tr>
      <td><div className="flex w-full flex-col items-center mt-5 ">
          <p className="text-center">Say Restarurant</p>
          <p className="text-stone-300">Updated 1 day ago</p>
          </div> </td>
      <td className="mx-auto">
      <div className="flex w-full flex-col items-center mt-5 ">
          <p className="text-center">345334frw</p>
          <p className="text-stone-300">On 24.05.2019</p>
          </div> 
      </td>
      <td>
        <FaEye className="text-green-900 mx-auto" />
      </td>
      <td>
        <div className="flex w-full mx-auto justify-center items-center">
          <button className="py-1 px-4 bg-slate-300 rounded-xl">Resto</button>
          <BiDotsVertical className="text-2xl"/>
        </div>
      </td>
    </tr>
  );
}

export default Row;

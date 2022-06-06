import React, { useEffect, useState } from "react";
import { api } from "../contexts/AppContext";
import { useRest } from "../contexts/RestContexts";

function ProvCard({cat}) {

    const [relProviders, setRelProviders]= useState([])
    const { providers } = useRest()

    const getProvider = ()=>{
        setRelProviders(providers.filter(prov=> prov.serviceCategory.name === cat.name))
    }

    useEffect(()=>{
      getProvider()
    },[cat])

  return (
    <div className=" flex flex-col w-100 border-[1px] border-solid border-gray-400 rounded-lg">
      <div className="flex flex-col px-5 pt-2 ">
        <div className="flex flex-row py-2">
          <div className="w-1/2  ">
            <p className="font-bold flex "> {cat.name}</p>
            <p className="font-light flex text-gray-400">Sales</p>
          </div>
          <div className=" w-1/2 ">
            <p className="text-green-800  font-bold ">View Details</p>
          </div>
        </div>
      </div>
      {relProviders.map((rel, index)=>(
      <div className="flex flex-col px-5 pt-2  border-[1px] border-solid border-gray-200">
        <p className="flex">{rel.name}</p>
      </div>
      ))}
    </div>
  );
}

export default ProvCard;

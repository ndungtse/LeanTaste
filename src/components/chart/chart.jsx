import react, { useEffect } from "react";
import SideBar from "../SideBar";
import { ImSearch } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import Graph from "./graph";
import AddRest from "./AddRest";
import { useRest } from "../contexts/RestContexts";
import ProvCard from "./Providers";
import { api, useApp } from "../contexts/AppContext";

const Dashboard = () => {

  const { user_token } = useApp()
  const { proCats, user } = useRest()

  const getStats = async()=>{
    const res = await api.get('/dashboard-stats/service-providers',{
      headers:{
        "accessToken": `Bearer ${user_token.accessToken}`,
        "Authorization": `Bearer ${user_token.accessToken}`,
      }
    })
    console.log(res);
  }

  useEffect(()=>{
    getStats()
  },[])

  return (
    <div className="w-full fixed">
      <div className="flex flex-row  ">
        <SideBar active={`overview`} />
        <div className="flex flex-col h-screen  w-full overflow-y-auto ">
          <div className="flex  w-full justify-between px-4 pt-4">
            <p className="font-semibold ml-10 font ">Overview</p>
            <div className="flex flex-row  ">
              <ImSearch className="mt-4 mx-1" />
              <IoIosNotifications className="mt-4 mx-3" />
              {<p className="mt-3 mx-3 font-bold">{user.name}</p>}
            </div>
          </div>
          <div className="flex flex-row  pl-20">
            <div className="flex flex-col w-1/6 h-20 px-20 py-3 mx-1 mt-4 border-2 rounded-md border-solid border-gray-200">
              <p className="font-bold">Clients</p>
              <p className="font-bold">2345</p>
            </div>
            <div className="flex flex-col w-1/6 h-20  px-20 justify-center mx-1 mt-4 border-2   rounded-md border-solid bg-green-800">
              <p className="font-bold">Revenues(FRW)</p>
              <p className="font-bold">2345</p>
            </div>
            <div className="flex flex-col w-1/6 h-20  px-20 justify-center mx-1  mt-4 border-2 rounded-md border-solid border-gray-200">
              <p className="font-bold mx-auto w-fit">Orders</p>
              <p className="font-bold">2345</p>
            </div>
          </div>
          <div className="flex flex-row px-[2%] pt-5 h-50">
            <div className="flex flex-row bg-white w-4/6 border-[1px] m-3  rounded-lg border-solid border-gray-200">
              <div className="flex flex-col ">
                <div className="flex flex-col text-left pb-8 mr-10 pl-10 pt-4 ">
                  <p className="font-bold">Today's trends</p>
                  <p className="text-blue-200">25th May 2022</p>
                </div>
                <div className="">
                  { <Graph /> }
                  </div>
              </div>
            </div>
            <div className="flex flex-col bg-white  rounded-lg w-2/6 border-[1px]  m-3 border-solid border-gray-200">
              <div className="flex flex-col h-1/4 p-4 justify center   border-t-[1px] border-b-[1px]   border-solid  border-gray-200 ">
                <p className="font-bold text-gray-200">Orders</p>
                <p className="font-bold">56</p>
              </div>
              <div className="flex flex-col h-1/4 p-4 justify center   border-t-[1px] border-b-[1px]   border-solid  border-gray-200">
                <p className="font-bold text-gray-200">Items</p>
                <p className="font-bold">56</p>
              </div>
              <div className="flex flex-col  h-1/4 p-4 justify center border-b-[1px]  border-solid border-gray-200">
                <p className="font-bold text-gray-200">Order/hour</p>
                <p className="font-bold">234</p>
              </div>
              <div className="flex flex-col h-1/4 p-4 justify center  border-b-[1px]    border-solid border-gray-200">
                <p className="font-bold text-gray-200">Clients</p>
                <p className="font-bold">67</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row px-20 pt-5 h-50 ">
            <div className="grid grid-cols-2   gap-4  pt-5 bg-white w-4/6 border-[1px] m-3  ">
              {proCats.map((cat, index)=>(
              <ProvCard cat={cat} key={index} />
              ))}
            </div>
            <AddRest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

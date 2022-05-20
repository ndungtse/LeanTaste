import react from "react";
import SideBar from "../SideBar";
import { ImSearch } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
// import ProfilePic from "../../img/Ellipse18.png";
// import Graph from "./graph";
// import { BiMessageAltAdd } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
// import {FaCircle} from "react-icons/fa"

const Dashboard = () => {
  return (
    <div className="w-full fixed" >
      <div className="flex flex-row  ">
        <SideBar />
        <div className="flex flex-col h-screen  w-full overflow-y-auto ">
          <div className="flex  w-full justify-between px-4 pt-4">
            <p className="font-semibold ml-10 font ">Overview</p>
            <div className="flex flex-row  ">
              <ImSearch className="mt-4 mx-1" />
              <IoIosNotifications className="mt-4 mx-3" />
              {<p className="mt-3 mx-3 font-bold">Kagabo Jacques</p>}
              {/* {<img className=" h-12" src={ProfilePic} />} */}
            </div>
          </div>
          <div className="flex flex-row  pl-20">
            <div className="flex flex-col w-1/6 h-20 justify-center mx-1 mt-4 border-2 rounded-md border-solid border-gray-200">
              <p className="font-bold">Clients</p>
              <p className="font-bold">2345</p>6
            </div>
            <div className="flex flex-col w-1/6 h-20 justify-center mx-1 mt-4 border-2   rounded-md border-solid bg-green-800">
              <p className="font-bold">Clients</p>
              <p className="font-bold">2345</p>
            </div>
            <div className="flex flex-col w-1/6 h-20 justify-center mx-1   mt-4 border-2 rounded-md border-solid border-gray-200">
              <p className="font-bold">Clients</p>
              <p className="font-bold">2345</p>
            </div>
          </div>
          <div className="flex flex-row px-20 pt-5 h-50">
            <div className="flex flex-row bg-white w-4/6 border-[1px] m-3  rounded-lg border-solid border-gray-200">
              <div className="flex flex-col ">
                <div className="flex flex-col text-left pb-8 mr-10 pl-10 pt-4 ">
                  <p className="font-bold">Today's trends</p>
                  <p className="text-blue-200">25th May 2022</p>
                </div>
                <div className="">
                  {/* <Graph /> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white  rounded-lg w-2/6 border-[1px]  m-3 border-solid border-gray-200">
              <div className="flex flex-col h-1/4 p-4 justify center   border-t-[1px] border-b-[1px]   border-solid  border-gray-200 ">
                <p className="font-bold text-gray-200">Clients</p>
                <p className="font-bold">56</p>
              </div>
              <div className="flex flex-col h-1/4 p-4 justify center   border-t-[1px] border-b-[1px]   border-solid  border-gray-200">
                <p className="font-bold text-gray-200">Clients</p>
                <p className="font-bold">56</p>
              </div>
              <div className="flex flex-col  h-1/4 p-4 justify center border-b-[1px]  border-solid border-gray-200">
                <p className="font-bold text-gray-200">Clients</p>
                <p className="font-bold">56</p>
              </div>
              <div className="flex flex-col h-1/4 p-4 justify center  border-b-[1px]    border-solid border-gray-200">
                <p className="font-bold text-gray-200">Clients</p>
                <p className="font-bold">56</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row px-20 pt-5 h-50 ">
            <div className="grid grid-cols-2   gap-4  pt-5 bg-white w-4/6 border-[1px] m-3  rounded-lg border-solid border-gray-200">
              <div className=" flex flex-col w-100  h-40 border-[1px] border-solid border-gray-400 rounded-lg">
                <div className="flex flex-col px-5 pt-2 border-b-[1px] border-solid border-gray-200 ">
                  <div className="flex flex-row py-2">
                    <div className="w-1/2  ">
                      <p className="font-bold flex "> Restaurants</p>
                      <p className="font-light flex text-gray-400">Sales</p>
                    </div>
                    <div className=" w-1/2 ">
                      <p className="text-green-800  font-bold ">View Details</p>
                    </div>
                  </div>
                  <p className="flex ">Sole luna</p>
                </div>
                <div className="flex flex-col px-5 pt-2">
                  <p className="flex">Sole luna </p>
                </div>
              </div>
              <div className=" flex flex-col w-100 ">
                <div className="flex flex-col px-5 pt-2  pb-2 border-b-[1px] border-solid border-gray-200 ">
                  <div className="flex flex-row py-2">
                    <div className="w-1/2  ">
                      <p className="font-bold flex "> Restaurants</p>
                      <p className="font-light flex text-gray-400">Sales</p>
                    </div>
                    <div className=" w-1/2 ">
                      <p className="text-green-800  font-bold ">View Details</p>
                    </div>
                  </div>
                  <p className="flex ">Sole luna</p>
                </div>
                <div className="flex flex-col px-5 pt-2">
                  <p className="flex">Sole luna </p>
                </div>
              </div>
              <div className=" flex flex-col w-100  h-40 border-[1px] border-solid border-gray-400 rounded-lg">
                <div className="flex flex-col px-5 pt-2 border-b-[1px] border-solid border-gray-200 ">
                  <div className="flex flex-row py-2">
                    <div className="w-1/2  ">
                      <p className="font-bold flex "> Restaurants</p>
                      <p className="font-light flex text-gray-400">Sales</p>
                    </div>
                    <div className=" w-1/2 ">
                      <p className="text-green-800  font-bold ">View Details</p>
                    </div>
                  </div>
                  <p className="flex ">Sole luna</p>
                </div>
                <div className="flex flex-col px-5 pt-2">
                  <p className="flex">Sole luna </p>
                </div>
              </div>
              <div className=" flex flex-col w-100  h-40 border-[1px] border-solid border-gray-400 rounded-lg">
                <div className="flex flex-col px-5 pt-2 border-b-[1px] border-solid border-gray-200 ">
                  <div className="flex flex-row py-2">
                    <div className="w-1/2  ">
                      <p className="font-bold flex "> Restaurants</p>
                      <p className="font-light flex text-gray-400">Sales</p>
                    </div>
                    <div className=" w-1/2 ">
                      <p className="text-green-800  font-bold ">View Details</p>
                    </div>
                  </div>
                  <p className="flex ">Sole luna</p>
                </div>
                <div className="flex flex-col px-5 pt-2">
                  <p className="flex">Sole luna </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white  rounded-lg w-2/6 border-[1px]  m-3 border-solid border-gray-200">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col ml-10 mt-5">
                    <p className="font-bold">Create</p>
                    <p className="font-light text-blue-200">Today</p>
                  </div>
                  <div className="font-bold  text-green-800 mr-10 mt-5">
                    View All
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-blue-200 font-light text-left pl-10 py-5"> Create New</div>
                </div>
                <div className="flex flex-row justify-between m-5">
                  <div className="ml-10">Restaurants</div>
                  <button className="bg-green-800 text-white rounded-full mr-10 w-14">New</button>
                </div>
                <div className="flex flex-row items-center justify-between m-5">
                  <div className="flex items-center ml-3">< BiCircle className="mr-2"/>Restaurants</div>
                  <button className="bg-green-800 text-white rounded-full mr-10 w-14">New</button>
                </div>
                <div className="flex flex-row justify-between m-5">
                  <div className="ml-10">Restaurants</div>
                  <button className="bg-green-800 text-white rounded-full mr-10 w-14">New</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

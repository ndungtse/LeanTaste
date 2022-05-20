import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import {
  BiBell,
  BiDotsHorizontalRounded,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import Order from "./Order";
import AddOrder from "./AddOrder";
import "./order.css";
import { useApp } from "../contexts/AppContext";
import { useRest } from "../contexts/RestContexts";

function Orders() {
  const [show, setShow] = useState(false);
  const { orders } = useApp();
  const [filtered, setFiltered] = useState(orders)
  const [color, setColor] = useState('ORDERING')
  const [counts, setCounts] = useState({failed: 0,ordering: 0, delivered: 0, cancelled: 0, all: 0})
  const { user } = useRest()

  const filterHandler = (e)=>{
    setColor(e.target.id)
    if (e.target.id!=="ALL") {
      setFiltered(orders.filter(fil=> fil.status===e.target.id))
    }else{
      setFiltered(orders)
    }
  }

  const statusCounter = ()=>{
    const delivered = orders.filter(fil=> fil.status==='PLACED')
    const cancelled = orders.filter(fil=> fil.status==='CANCELLED')
    const ordering = orders.filter(fil=> fil.status==='ORDERING')
    const fail = orders.filter(fil=> fil.status==='FAILED')
    const all = orders
    setCounts({
      delivered: delivered.length, ordering: ordering.length,
       cancelled: cancelled.length, all: all.length, failed: fail.length
    })
  }

  useEffect(()=>{
    statusCounter();
  },[])

  useEffect(()=>{
    setFiltered(orders.filter(fil=> fil.status==='ORDERING'))
  },[orders])

  return (
    <>
      <BiDotsHorizontalRounded onClick={()=> setShow(!show)}
        className="text-3xl z-[2] hideright hidden
         cursor-pointer absolute top-[17vh] right-2" />
      <div
        onClick={() => setShow(false)}
        className="w-full h-screen flex fixed"
      >
        <SideBar active={`order`} />
        <div className="flex all flex-col w-full bg-slate-200 h-screen pl-10">
          <div
            onClick={() => setShow(false)}
            className="flex w-full mt-7  px-4 items-center justify-between"
          >
            <p className="text-3xl font-semibold">Orders</p>
            <div className="flex">
              <div className="flex text-2xl items-center border-r-2 border-black">
                <BiSearch className="mr-5" />
                <BiBell className="mr-5" />
              </div>
              <p className="ml-3">{user.name}</p>
              <BiUser className="ml-3 text-2xl" />
            </div>
          </div>
          <div className="flex bg-white  mt-[60px] h-full w-full">
            <div
              onClick={() => setShow(false)}
              className="flex olist flex-col w-3/5 pl-8 min-w-[50%]"
            >
              <div className="flex items-center">
                <div className="flex flex-col oh1 items-start pt-4">
                  <h1 className="text-2xl font-semibold">Orders</h1>
                  <p className="text-slate-500">as of 25 May 2022, 09:41 PM</p>
                </div>
                <div className="flex ot items-center ml-[6%]">
                  <button id="ORDERING"
                  onClick={filterHandler}
                    className={`p-2 w-[100px] px-4 
                    mx-2 ${color==='ORDERING' && 'bg-[#0B6041] text-white'}  border-4 border-[#0B6041] rounded-lg`}
                  >
                    New
                  </button>
                  <button
                  id="PLACED"
                    onClick={filterHandler}
                    className={`p-2 obtns w-[100px] px-4 
                    mx-2 ${color==='PLACED' && 'bg-[#0B6041] text-white'} border-4 border-[#0B6041] rounded-lg`}
                  >
                    Delivered
                  </button>
                  <button
                  id="CANCELLED"
                    onClick={filterHandler}
                    className={`p-2 obtns w-[100px] px-4 
                    mx-2 ${color==='CANCELLED' && 'bg-[#0B6041] text-white'} border-4 border-[#0B6041] rounded-lg`}
                  >
                    Rejected
                  </button>
                  <button
                    id="ALL"
                    onClick={filterHandler}
                    className={`p-2 obtns w-[100px] px-4 
                    mx-2 ${color==='ALL' && 'bg-[#0B6041] text-white'}  border-4 border-[#0B6041] rounded-lg`}
                  >
                    All
                  </button>
                </div>
              </div>
              <div className=" olist overflow-auto h-[70vh]">
                {filtered.map((order, index) => (
                  <Order key={index} order={order} index={index + 1} />
                ))}
              </div>
            </div>
            <div
              className={`w-2/5 scr1 leftorder flex px-3 flex-col items-center
              overflow-auto duration-500 h-[80vh] ${show && "leftshow"}`}
            >
              <div className="flex flex-col mt-10 items-center">
                <p className="text-xl">New</p>
                <h1 className="text-[2em] font-semibold">{counts.ordering}</h1>
              </div>
              <div className="flex flex-col mt-10 items-center">
                <p className="text-xl">Delivered</p>
                <h1 className="text-[2em] font-semibold">{counts.delivered}</h1>
              </div>
              <div className="flex flex-col mt-10 items-center">
                <p className="text-xl">Rejected</p>
                <h1 className="text-[2em] font-semibold">{counts.cancelled}</h1>
              </div>
              <div className="flex flex-col mt-10 items-center">
                <p className="text-xl">Failed</p>
                <h1 className="text-[2em] font-semibold">{counts.failed}</h1>
              </div>
              <div className="flex flex-col mt-10 items-center">
                <p className="text-xl">All</p>
                <h1 className="text-[2em] font-semibold">{counts.all}</h1>
              </div>
              <AddOrder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;

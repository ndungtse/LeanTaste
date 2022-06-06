import React from 'react'

function Order({order, index}) {

  return (
    <div className='flex order items-center my-4 rounded-xl p-3 px-4 justify-between bg-slate-200'>
        <h1 className="text-2xl  text-center text-green-900 font-semibold">Order {index}</h1>
        <div className="flex flex-col items-start ml-2">
            <p>{order.orderDetails[0].item.name}</p>
            <p>{order.customer.firstName} | x{order.numberOfProducts}</p>
            <div className="flex items-center text-green-900 font-semibold">
            &#9866;Table 8&#9866;
            </div>
        </div>
        <div className="flex flex-col items-start">
            <h1 className="text-3xl font-semibold text-center">RWF {order.orderDetails[0].item.unitPrice}</h1>
            <div className="flex items-center text-green-900 font-semibold text-center">
            &#9866;Table 8&#9866;
            </div>
            <p>{order.customer.mobile}</p>
        </div>
    </div>
  )
}

export default Order
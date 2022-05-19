import React from 'react'

function Order() {
  return (
    <div className='flex order items-center my-4 rounded-xl p-3 px-4 justify-between bg-slate-200'>
        <h1 className="text-2xl font-semibold text-center">Order 1</h1>
        <div className="flex flex-col items-start ml-2">
            <p>Kaffir Lime, Vodk, Lemongrass,Ginger, Citrus</p>
            <p>Tom Yimmy | x2</p>
            <div className="flex items-center">
                Table 8
            </div>
        </div>
        <div className="flex flex-col items-start">
            <h1 className="text-3xl font-semibold">Frw 5,000</h1>
            <div className="flex items-center">
                Table 8
            </div>
            <p>0788724332</p>
        </div>
    </div>
  )
}

export default Order
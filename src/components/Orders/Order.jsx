import React from 'react'

function Order() {
  return (
    <div className='flex items-center my-4 rounded-xl p-3 px-4 justify-between bg-slate-200'>
        <h1 className="text-2xl font-semibold">Order 1</h1>
        <div className="flex flex-col mx-auto w-full pl-2 items-start">
            <p className='text-left'>Kaffir Lime, Vodk, Lemongrass,Ginger, Citrus</p>
            <p  className='text-left'>Tom Yimmy | x2</p>
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
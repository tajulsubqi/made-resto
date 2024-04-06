import React from "react"
import Cart from "./cart"

const RightBar = () => {
  return (
    <div className="w-1/3 h-screen px-5 py-5 bg-gray-900 end-0 fixed ">
      <h2 className="font-semibold text2xl">Orders</h2>

      <div className="flex mt-4 gap-2">
        <button className=" bg-yellow-300 hover:bg-yellow-400 transition duration-300 text-slate-700 py-2 px-3 rounded-lg font-bold">
          Dine In
        </button>

        <button className=" border border-yellow-300 text-yellow-300  py-2 px-3 rounded-lg font-bold">
          Take It
        </button>

        <button className=" border border-yellow-300 text-yellow-300  py-2 px-3 rounded-lg font-bold">
          Delivery
        </button>
      </div>

      <div className="flex justify-between my-5 font-semibold">
        <p>Item</p>

        <div className="flex gap-32 pe-4">
          <p>Qty</p>
          <p>Price</p>
        </div>
      </div>

      <hr className="border border-slate-500 w-full" />

      <Cart />
    </div>
  )
}

export default RightBar

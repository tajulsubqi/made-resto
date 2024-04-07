"use client"
import React from "react"
import CartItem from "../cart/CartItem"
import useCalculateTotalPrice from "@/components/cart/hooks/useSubtotal"

const Confirmation = () => {
  const calculateTotalPrice = useCalculateTotalPrice()
  return (
    <>
      {/* title */}
      <div className="flex">
        <div className="w-full pe-4">
          <div className="flex justify-between w-full ">
            <div className="flex gap-2 flex-col">
              <h1 className="text-3xl text-white font-semibold">Confirmation</h1>
              <h2 className="text-lg text-[#ABBBC2] ">Orders #3232323</h2>
            </div>

            <div className="w-12 h-12 bg-[#FFCA40] mt-4 flex justify-center items-center rounded-md">
              <button className="text-4xl text-white">+</button>
            </div>
          </div>

          <hr className="w-full my-5 border-[1px] border-[#393C49]" />

          <div
            className="flex flex-col gap-4 overflow-auto h-[500px] pe-2"
            style={{ scrollbarWidth: "none" }}
          >
            <CartItem showPayment={false} />

            <div className="absolute flex flex-col bottom-0 start-0 end-[34.4rem] z-50 gap-3 text-white mb-10 bg-[#1F1D2B]  px-5 py-5">
              <div className="flex justify-between">
                <p className="text-slate-300">Discount</p>
                <p>Rp. </p>
              </div>

              <div className="flex justify-between">
                <p className="text-slate-300">Sub Total</p>
                <p>Rp. {calculateTotalPrice()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Confirmation

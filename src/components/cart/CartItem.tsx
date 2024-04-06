"use client"
import { useState } from "react"
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"

const CartItem = ({showPayment}: {showPayment: boolean}) => {
 

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-2 ">
            <div className="w-14 h-14 rounded-full bg-slate-500"></div>
            <div>
              <p className="text-md text-white">dhudgh</p>
              <p className="text-sm text-slate-400">Rp. 3000</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <span className="w-10 h-12 flex justify-center items-center rounded-md text-white bg-gray-700 font-semibold">
              2
            </span>

            {showPayment && (
              <div className="flex flex-col mx-6 gap-2">
                <button className="border border-slate-500 text-yellow-300">
                  <ArrowDropUpRoundedIcon fontSize="large" />
                </button>

                <button className="border border-slate-500 text-yellow-300 ">
                  <ArrowDropDownRoundedIcon fontSize="large" />
                </button>
              </div>
            )}

            <p className="text-white ml-5">Rp. 65.000</p>
          </div>
        </div>

        <div className="flex ps-1 justify-between gap-3">
          <input
            placeholder="Add note..."
            className=" py-4 px-3 rounded-md w-full bg-slate-700 mt-3 text-white outline-none"
          />

          <button className="flex items-center justify-center p-3 mt-3 border border-yellow-300 rounded-lg text-yellow-600 ml-3 ">
            <DeleteOutlineRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

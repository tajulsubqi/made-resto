"use client"
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded"
import { RootState } from "@/lib/Store"
import Image from "next/image"
import useRemoveItemFromCart from "./hooks/useRemove"
import { useAppSelector } from "@/lib/Hooks"

import { ButtonIncrement } from "./hooks/button/buttonIncrement"
import { ButtonDecrement } from "./hooks/button/buttonDecrement"

const CartItem = ({ showPayment }: { showPayment: boolean }) => {
  const cartData = useAppSelector((state: RootState) => state.cart)

  const handleRemoveItemFromCart = useRemoveItemFromCart()

  return (
    <div>
      {cartData.map((item, idx) => (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-2 ">
              <Image
                width={100}
                height={100}
                alt="image"
                src={item.image}
                className="w-14 h-14 rounded-full bg-slate-500"
              />
              <div>
                <p className="text-md text-white">{item.name}</p>
                <p className="text-sm text-slate-400">Rp. {item.price}</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="w-10 h-12 flex justify-center items-center rounded-md text-white bg-gray-700 font-semibold">
                {item.kuantitas}
              </span>

              {showPayment && (
                <div className="flex flex-col mx-6 gap-2">
                  <ButtonIncrement dish={item} />
                  <ButtonDecrement dish={item} />
                </div>
              )}

              <p className="text-white ml-5">
                Rp.{Number(item.price * item.kuantitas).toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <div className="flex ps-1 justify-between gap-3">
            <input
              placeholder="Add note..."
              className=" py-4 px-3 rounded-md w-full bg-slate-700 mt-3 text-white outline-none"
            />

            <button
              onClick={() => handleRemoveItemFromCart(idx)}
              className="flex items-center justify-center p-3 mt-3 border border-yellow-300 rounded-lg text-yellow-600 ml-3 "
            >
              <DeleteOutlineRoundedIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItem

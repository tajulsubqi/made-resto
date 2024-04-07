import Image from "next/image"
import React from "react"
import {  useSelector } from "react-redux"

import { Product } from "@/interfaces/product"
import { RootState } from "@/lib/Store"
import DishButton from "@/lib/features/DishButton"

const HotDishes = () => {
  const hotDishesData = useSelector((state: RootState) => state.hotDishes.hotDishes)

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-20">
        {hotDishesData.map((item: Product) => (
          <>
            <div className="relative bg-gray-900 w-72 h-96 rounded-lg mb-10">
              <Image
                src={item.image}
                alt="..."
                width={100}
                height={100}
                className="absolute bg-slate-100 -top-10 left-14 w-44 h-44 rounded-full"
              />
              <div className="flex flex-col h-full mt-36 items-center gap-2 py-5 px-3">
                <h2 className="text-lg text-center font-semibold">{item.name}</h2>
                <p className="text-lg  font-semibold">
                  Rp. {item.price.toLocaleString("id-ID")}
                </p>
                <p className="text-md text-slate-400">{item.stocks} Bowls available</p>

                {/* <button className="w-1/2 text-slate-800 font-bold bg-yellow-300 py-2 mt-2 rounded-lg">
                  add
                </button> */}
                <DishButton dish={item} />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default HotDishes

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setColdDishes } from "@/lib/features/coldDish/coldDishSlice"
import { Product } from "@/interfaces/product"
import { RootState } from "@/lib/Store"
import coldDishes from "../../../public/mocks/cold_dishes.json"

import DishButton from "@/lib/features/DishButton"

const ColdDishes = () => {
  const coldDishesData = useSelector((state: RootState) => state.coldDishes.coldDishes)

  return (
    <div className="grid grid-cols-3 gap-6 mt-20">
      {coldDishesData.map((item: Product) => (
        <div key={item.name} className="relative bg-gray-900 w-72 h-96 rounded-lg mb-10">
          <img
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="absolute bg-slate-100 -top-10 left-14 w-44 h-44 rounded-full"
          />
          <div className="flex flex-col h-full mt-36 items-center gap-2 py-5 px-3">
            <h2 className="text-lg text-center font-semibold">{item.name}</h2>
            <p className="text-lg font-semibold">
              Rp. {item.price.toLocaleString("id-ID")}
            </p>
            <p className="text-md text-slate-400">{item.stocks} Bowls available</p>

            {/* <button  className="w-1/2 text-slate-800 font-bold bg-yellow-300 py-2 mt-2 rounded-lg">
              add
            </button> */}
            <DishButton dish={item} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColdDishes

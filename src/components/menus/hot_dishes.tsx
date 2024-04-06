import Image from "next/image"
import React from "react"
import hotDishes from "./mocks/hot_dishes.json"

const HotDishes = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-20">
        {hotDishes.map((item) => (
          <>
            <div className="relative bg-gray-900 w-72 h-80 rounded-lg mb-10">
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
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default HotDishes

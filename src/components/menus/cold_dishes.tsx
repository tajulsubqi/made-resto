"use client"
import Image from "next/image"
import API from "@/lib/axiosInstance/API"
import { Data } from "@/types"
import { useEffect, useState } from "react"
import AddCartButton from "../utilities/AddCartButton"

const ColdDishes = () => {
  const [coldDishesData, setColdDishesData] = useState<Data[]>([])

  const fetchData = async () => {
    const response = await API.get("/coldDishes")
    setColdDishesData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-20">
        {coldDishesData.map((item: Data) => (
          <>
            <div
              key={item.id}
              className="relative bg-gray-900 w-72 h-96 rounded-lg mb-10"
            >
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
                <p className="text-md text-slate-400">
                  <span className="text-yellow-300">{item.stock}</span> Bowls available
                </p>

                <div className="absolute bottom-6">
                  <AddCartButton />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default ColdDishes

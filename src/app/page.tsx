"use client"
import React, { useEffect } from "react"
import Home from "./home/page"
import Sidebar from "@/components/sidebar"
import RightBar from "@/components/RightBar"
import { useDispatch } from "react-redux"
import { setHotDishes } from "@/lib/features/hotDish/hotDishSlice"
import { setColdDishes } from "@/lib/features/coldDish/coldDishSlice"
import coldDishes from "../../public/mocks/cold_dishes.json"
import hotDishes from "../../public/mocks/hot_dishes.json"

const Page = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHotDishes(hotDishes))
    dispatch(setColdDishes(coldDishes))
  }, [dispatch])

  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}
        <Home />
        <RightBar />
      </div>
    </>
  )
}

export default Page

import React from "react"
import Home from "./home/page"
import Sidebar from "@/components/sidebar"
import RightBar from "@/components/RightBar"

const Page = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Home />
        <RightBar />
      </div>
    </>
  )
}

export default Page

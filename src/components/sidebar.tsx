"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"

const Sidebar = () => {
  const [isActiveHome, setIsActiveHome] = useState(false)
  const [isActiveSettings, setIsActiveSettings] = useState(false)

  const handleToggleHome = () => {
    setIsActiveHome(true)
    setIsActiveSettings(false)
  }

  const handleToggleSettings = () => {
    setIsActiveHome(false)
    setIsActiveSettings(true)
  }
  return (
    <>
      <div className="flex flex-col w-24 h-full fixed p-3 bg-gray-900 text-white justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center mt-5 h-16">
            <Image
              src="/icons/bx_bxs-store-alt.png"
              width={100}
              height={100}
              alt="Icon 1"
              className="w-10 h-10"
            />
          </div>

          <Link
            href="/home"
            className={`flex items-center justify-center h-full text-[${
              isActiveHome ? "white" : "#FFCA40"
            }] ${isActiveHome ? "bg-[#FFCA40]" : ""} rounded-lg`}
            onClick={handleToggleHome}
          >
            <HomeOutlinedIcon className="w-7 h-7" />
          </Link>

          <Link
            href="/setting"
            className={`flex items-center justify-center h-full text-[${
              isActiveSettings ? "white" : "#FFCA40"
            }] ${isActiveSettings ? "bg-[#FFCA40]" : ""} rounded-lg`}
            onClick={handleToggleSettings}
          >
            <SettingsOutlinedIcon className="w-7 h-7" />
          </Link>
        </div>

        <button className="flex flex-col items-center justify-center h-16">
          <Image
            src="/icons/Log Out.png"
            width={100}
            height={100}
            alt="Icon 1"
            className="w-8 h-8"
          />
        </button>
      </div>
    </>
  )
}

export default Sidebar

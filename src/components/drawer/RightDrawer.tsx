"use client"
// import * as React from "react"
import Drawer from "@mui/material/Drawer"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Confirmation from "./Confirmation"
import Payment from "./Payment"
import useDrawer from "@/app/hooks/useDrawer"

export default function RightDrawer() {
  const { open, toggleDrawer, closeDrawer } = useDrawer()

  return (
    <div>
      <button
        onClick={toggleDrawer("right", true)}
        className="w-full mt-3 text-xl bg-yellow-300 py-3 rounded-md text-slate-800 hover:bg-yellow-400 duration-300 transition font-bold"
      >
        Continue to Payment
      </button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer("right", false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 1100,
            bgcolor: "#1F1D2B",
            paddingX: 3,
            paddingY: 1,
          },
        }}
      >
        <div className="w-1/2 border-r border-solid border-[#393C49] mb-3">
          <button
            onClick={closeDrawer}
            className="max-w-10 text-xl bg-[#1F1D2B] py-3 rounded-md text-white"
          >
            <ArrowBackIcon />
          </button>
        </div>

        {/* main drawer */}
        <div className="flex">
          <div className="w-1/2 border-r border-solid border-[#393C49] z-20 ">
            <Confirmation />
          </div>

          <div className="w-1/2 z-30 relative">
            <Payment onClick={closeDrawer} />
          </div>
        </div>
      </Drawer>
    </div>
  )
}

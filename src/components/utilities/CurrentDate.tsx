"use client"
import { useState, useEffect } from "react"
import { format } from "date-fns"

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      setCurrentDate(format(date, "EEEE, d MMMM yyyy"))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 text-md rounded-xl shadow-md px-3 py-2">
      <p className="text-md text-slate-200">{currentDate}</p>
    </div>
  )
}

export default CurrentDate

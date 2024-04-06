import React from "react"

const PayButton = ({ icon, label }: { icon: any; label: string }) => {
  return (
    <div>
      <button className="flex flex-col justify-center items-center text-slate-300 border border-slate-400 w-[120px] py-3 rounded-lg ">
        {icon}
        {label}
      </button>
    </div>
  )
}

export default PayButton

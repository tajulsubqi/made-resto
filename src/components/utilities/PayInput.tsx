import React from "react"

type PayInputProps = {
  className?: string
  label: string
  type?: string
}

const PayInput = ({ className, label, type }: PayInputProps) => {
  return (
    <div className={className}>
      <label htmlFor="" className="text-white">
        {label}
      </label>
      <input
        type={type}
        className="w-full py-4 text-white px-3 outline-none bg-gray-700 rounded-lg mt-1"
      />
    </div>
  )
}

export default PayInput

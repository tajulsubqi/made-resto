import React from "react"

type DateInputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  label: string
  value?: string
}

const DateInput = ({ label, onChange, className, value }: DateInputProps) => {
  return (
    <div className={className}>
      <div className="flex flex-col">
        <label htmlFor="" className="text-white">
          {label}
        </label>
        <input
          type="date"
          value={value}
          onChange={onChange}
          className="bg-gray-700 text-slate-300 rounded-md px-3 py-4 mt-1 outline-none"
        />
      </div>
    </div>
  )
}

export default DateInput

type DropDownProps = {
  className?: string
  label: string
}

const PayDropdown = ({ className, label }: DropDownProps) => {
  return (
    <div className={className}>
      <label htmlFor="" className="text-white">
        {label}
      </label>
      <select
        name=""
        id=""
        className="w-full py-4 text-white px-3 outline-none bg-gray-700 rounded-md mt-2"
      >
        <option>Dine in</option>
        <option>Take it</option>
        <option>Delivery</option>
      </select>
    </div>
  )
}

export default PayDropdown

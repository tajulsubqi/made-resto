import React from "react"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import PaymentsIcon from "@mui/icons-material/Payments"
import PayButton from "../utilities/PayButton"
import PayInput from "../utilities/PayInput"
import DateInput from "../utilities/DateInput"
import PayDropdown from "../utilities/PayDropdown"

const Payment = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="w-full ps-5 h-full ">
        <div className="flex w-full">
          <div className="flex gap-2 flex-col">
            <h1 className="text-3xl text-white font-semibold">Payment</h1>
            <h2 className="text-lg text-[#ABBBC2] ">3 Payment method available</h2>
          </div>
        </div>
        <hr className="w-full my-5 border-[1px] border-[#393C49]" />
        <div>
          <h2 className="text-white font-semibold text-xl">Payment Method</h2>

          <div className="flex gap-4 mt-5">
            <PayButton label="Credit Card" icon={<CreditCardIcon />} />
            <PayButton label="Paypal" icon={<PaymentsIcon />} />
            <PayButton label="Cash" icon={<AccountBalanceWalletIcon />} />
          </div>

          <PayInput label="Cardholder Name" className="mt-5" />
          <PayInput label="Card Number" className="mt-5" />

          <div className="flex justify-between gap-4">
            <DateInput label="Expiration Date" className="w-full mt-5" />
            <PayInput label="CVV" className="w-full mt-5" />
          </div>

          <hr className="w-full mt-8 border-[1px] border-[#393C49]" />

          <div className="flex justify-between gap-4">
            <PayDropdown label="Order Type" className="w-full mt-5" />
            <DateInput label="Expiration Date" className="w-full mt-5" />
            {/* <PayInput label="Table no." type="number" className="w-full mt-5" /> */}
          </div>
        </div>

        <div className="flex justify-between gap-3">
          <button
            onClick={onClick}
            className="w-full border border-yellow-300 hover:bg-yellow-300 hover:bg-opacity-10 transition duration-300 text-yellow-300 text-md py-4 px-3 rounded-lg font-bold mt-12"
          >
            Cancel
          </button>

          <button className="w-full bg-yellow-300 hover:bg-yellow-500 transition duration-300 text-slate-700 text-md py-4 px-3 rounded-lg font-bold mt-12">
            Confirm Payment
          </button>
        </div>
      </div>
    </>
  )
}

export default Payment

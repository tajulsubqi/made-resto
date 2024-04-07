"use client"
import useCalculateTotalPrice from "@/components/cart/hooks/useSubtotal"
import RightDrawer from "../drawer/RightDrawer"
import CartItem from "./CartItem"

const Cart = () => {
  const calculateTotalPrice = useCalculateTotalPrice()
  return (
    <>
      <div className="h-[60%] overflow-auto pe-1" style={{ scrollbarWidth: "none" }}>
        <div className="my-5 flex flex-col gap-7">
          <CartItem showPayment={true} />
        </div>

        {/* payment */}
        <div className="flex flex-col gap-3 mt-3 fixed bottom-0 z-50 bg-gray-800 start-[68rem] end-0 px-5 py-5">
          <div className="flex justify-between">
            <p className="text-slate-300">Discount</p>
            <p>Rp. 0</p>
          </div>

          <div className="flex justify-between">
            <p className="text-slate-300">Sub Total</p>
            <p>Rp. {calculateTotalPrice()}</p>
          </div>

          <RightDrawer />
        </div>
      </div>
    </>
  )
}

export default Cart

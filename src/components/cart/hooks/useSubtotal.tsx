import { useAppSelector } from "@/lib/Hooks"
import { RootState } from "@/lib/Store"

const useCalculateTotalPrice = () => {
  const cartData = useAppSelector((state: RootState) => state.cart)

  const calculateTotalPrice = () => {
    let totalPrice = 0
    cartData.forEach((item) => {
      totalPrice += item.price * item.kuantitas
    })
    return totalPrice.toLocaleString("id-ID")
  }

  return calculateTotalPrice
}

export default useCalculateTotalPrice

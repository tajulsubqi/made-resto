import { RootState } from "@/lib/Store"
import { decrementQuantity } from "@/lib/features/cart/CartSlice"
import { incrementStock as incrementStockCold } from "@/lib/features/coldDish/coldDishSlice"
import { incrementStock as incrementStockHot } from "@/lib/features/hotDish/hotDishSlice"
import { useDispatch, useSelector } from "react-redux"

type ItemType = "cold" | "hot"

export const useDecrementQuantityWithStock = () => {
  const coldDishesData = useSelector((state: RootState) => state.coldDishes.coldDishes)
  const hotDishesData = useSelector((state: RootState) => state.hotDishes.hotDishes)
  const dispatch = useDispatch()

  const handleDecrementQuantity = (name: string, type: ItemType) => {
    const currentDishesData = type === "cold" ? coldDishesData : hotDishesData
    const dish = currentDishesData.find((item) => item.name === name)
    if (dish && dish.stocks > 0) {
      dispatch(decrementQuantity(name))
      if (type === "cold") {
        dispatch(incrementStockCold({ productName: name, amount: 1 }))
      } else if (type === "hot") {
        dispatch(incrementStockHot({ productName: name, amount: 1 }))
      }
    }
  }

  return handleDecrementQuantity
}

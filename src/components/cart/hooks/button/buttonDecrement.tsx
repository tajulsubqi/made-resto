
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import { useDecrementQuantityWithStock } from "../useDecrement"
import { Product } from "@/interfaces/product"

export const ButtonDecrement = ({ dish }: { dish: Product }) => {
  const handleDecrementQuantity = useDecrementQuantityWithStock()

  const handleIncrement = () => {
    handleDecrementQuantity(dish.name, dish.type)
  }

  return (
    <button
      onClick={() => handleIncrement()}
      className="border border-slate-500 text-yellow-300"
    >
      <ArrowDropDownRoundedIcon fontSize="large" />
    </button>
  )
}

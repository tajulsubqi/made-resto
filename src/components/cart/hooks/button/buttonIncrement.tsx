import { Product } from "@/interfaces/product"
import { useIncrementQuantityWithStock } from "../../hooks/useIncrement"
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded"

export const ButtonIncrement = ({ dish }: { dish: Product }) => {
  const handleIncrementQuantity = useIncrementQuantityWithStock()

  const handleIncrement = () => {
    handleIncrementQuantity(dish.name, dish.type)
  }

  return (
    <button
      onClick={() => handleIncrement()}
      className="border border-slate-500 text-yellow-300"
    >
      <ArrowDropUpRoundedIcon fontSize="large" />
    </button>
  )
}

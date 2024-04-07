import React from "react"
import { useDispatch } from "react-redux"
import { Product } from "@/interfaces/product"
import { addToCart } from "./cart/CartSlice"
import { reduceStock as reduceColdDishStock } from "./coldDish/coldDishSlice"
import { reduceStock as reduceHotDishStock } from "./hotDish/hotDishSlice"

type ItemType = "cold" | "hot";

const DishButton = ({ dish }: { dish: Product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (dish.stocks > 0) {
      dispatch(addToCart({ item: { ...dish, kuantitas: 1 }, type: dish.type }))
      if (dish.type === "cold") {
        dispatch(reduceColdDishStock({ productName: dish.name, amount: 1 }))
      } else if (dish.type === "hot") {
        dispatch(reduceHotDishStock({ productName: dish.name, amount: 1 }))
      }
    }
  }

  return (
<button
  onClick={handleAddToCart}
  disabled={dish.stocks === 0}
  className={`w-1/2 text-slate-800 font-bold ${
    dish.stocks === 0 ? "bg-slate-400 cursor-not-allowed" : "bg-yellow-300"
  } py-2 mt-2 rounded-lg`}
  style={{ color: dish.stocks === 0 ? "#CCCCCC" : "" }} 
>
  {dish.stocks === 0 ? "Sold out" : "Add"}
</button>
  )
}

export default DishButton

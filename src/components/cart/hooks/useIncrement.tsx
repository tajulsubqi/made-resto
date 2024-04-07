import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/Store";
import { incrementQuantity } from "@/lib/features/cart/CartSlice";

import { reduceStock as reduceColdDishStock } from "@/lib/features/coldDish/coldDishSlice"
import { reduceStock as reduceHotDishStock } from "@/lib/features/hotDish/hotDishSlice"

type ItemType = "cold" | "hot";

export const useIncrementQuantityWithStock = () => {
  const dispatch = useDispatch();
  const coldDishesData = useSelector((state: RootState) => state.coldDishes.coldDishes);
  const hotDishesData = useSelector((state: RootState) => state.hotDishes.hotDishes);

  const handleIncrementQuantity = (name: string, type: ItemType) => {
    const currentDishesData = type === "cold" ? coldDishesData : hotDishesData;
    const dish = currentDishesData.find((item) => item.name === name);
    if (dish && dish.stocks > 0) {
      dispatch(incrementQuantity(name));
      if (type === "cold") {
        dispatch(reduceColdDishStock({ productName: name, amount: 1 }))
      } else if (type === "hot") {
        dispatch(reduceHotDishStock({ productName: name, amount: 1 }))
      }
    }
  };

  return handleIncrementQuantity;
};

import { useAppDispatch, useAppSelector } from "@/lib/Hooks";
import { RootState } from "@/lib/Store";
import { removeItemFromCart } from "@/lib/features/cart/CartSlice";
import { restoreColdDishStock } from "@/lib/features/coldDish/coldDishSlice";
import { restoreHotDishStock } from "@/lib/features/hotDish/hotDishSlice";

const useRemoveItemFromCart = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state: RootState) => state.cart);

  const handleRemoveItemFromCart = (idx: number) => {
    const removedItem = cartData[idx];
    dispatch(removeItemFromCart(idx));
    if (removedItem.type === "cold") {
      dispatch(restoreColdDishStock({ productName: removedItem.name, quantity: removedItem.kuantitas }));
    } else if (removedItem.type === "hot") {
      dispatch(restoreHotDishStock({ productName: removedItem.name, quantity: removedItem.kuantitas }));
    }
  };

  return handleRemoveItemFromCart;
};

export default useRemoveItemFromCart;

import { configureStore } from "@reduxjs/toolkit"
import coldDishesReducer from "./features/coldDish/coldDishSlice"
import hotDishesReducer from "./features/hotDish/hotDishSlice"
import cartReducer from "./features/cart/CartSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      coldDishes: coldDishesReducer,
      hotDishes: hotDishesReducer,
      cart: cartReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

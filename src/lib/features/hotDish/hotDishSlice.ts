import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "@/interfaces/product"

interface HotDishState {
  hotDishes: Product[]
}
const initialState: HotDishState = {
  hotDishes: [],
}

const hotDishSlice = createSlice({
  name: "hotDishes",
  initialState,
  reducers: {
    setHotDishes(state, action: PayloadAction<Product[]>) {
      state.hotDishes = action.payload

      return state
    },
    reduceStock: (
      state,
      action: PayloadAction<{ productName: string; amount: number }>,
    ) => {
      const { productName, amount } = action.payload
      const product = state.hotDishes.find((item) => item.name === productName)
      if (product) {
        if (product.stocks === 0) {
         
          console.log("Stok produk sudah habis!")
        } else {
          product.stocks -= amount
        }
      }
    },
    restoreHotDishStock(state, action: PayloadAction<{ productName: string; quantity: number }>) {
      const { productName, quantity } = action.payload;
      const productIndex = state.hotDishes.findIndex(product => product.name === productName);
      if (productIndex !== -1) {
        state.hotDishes[productIndex].stocks += quantity;
      }
    },
    incrementStock: (
      state,
      action: PayloadAction<{ productName: string; amount: number }>
    ) => {
      const { productName, amount } = action.payload;
      const product = state.hotDishes.find(
        (item) => item.name === productName
      );
      if (product) {
        product.stocks += amount;
      }
    },
  },
})

export const { setHotDishes, reduceStock, restoreHotDishStock, incrementStock } = hotDishSlice.actions
export default hotDishSlice.reducer

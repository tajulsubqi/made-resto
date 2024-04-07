import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "@/interfaces/product"

interface ColdDishState {
  coldDishes: Product[]
}

const initialState: ColdDishState = {
  coldDishes: [],
}

const coldDishSlice = createSlice({
  name: "coldDishes",
  initialState,
  reducers: {
    setColdDishes: (state, action: PayloadAction<Product[]>) => {
      state.coldDishes = action.payload

      return state
    },
    reduceStock: (
      state,
      action: PayloadAction<{ productName: string; amount: number }>,
    ) => {
      const { productName, amount } = action.payload
      const product = state.coldDishes.find((item) => item.name === productName)
      if (product) {
        if (product.stocks === 0) {
          console.log("Stok produk sudah habis!")
        } else {
          product.stocks -= amount
        }
      }
    },
    restoreColdDishStock(
      state,
      action: PayloadAction<{ productName: string; quantity: number }>,
    ) {
      const { productName, quantity } = action.payload
      const productIndex = state.coldDishes.findIndex(
        (product) => product.name === productName,
      )
      if (productIndex !== -1) {
        state.coldDishes[productIndex].stocks += quantity
      }
    },
    incrementStock: (
      state,
      action: PayloadAction<{ productName: string; amount: number }>
    ) => {
      const { productName, amount } = action.payload;
      const product = state.coldDishes.find(
        (item) => item.name === productName
      );
      if (product) {
        product.stocks += amount;
      }
    },
  
  },
})

export const { setColdDishes, reduceStock, restoreColdDishStock, incrementStock } = coldDishSlice.actions
export default coldDishSlice.reducer

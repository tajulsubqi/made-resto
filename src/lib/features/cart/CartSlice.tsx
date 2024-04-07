import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Product } from "@/interfaces/product"

interface CartItem extends Product {
  kuantitas: number
}

type ItemType = "cold" | "hot"

const initialState: CartItem[] = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ item: CartItem; type: ItemType }>) {
      const { type } = action.payload
      const { name, price, stocks, image, kuantitas } = action.payload.item
      const existingItemIndex = state.findIndex((item) => item.name === name)

      if (existingItemIndex !== -1) {
        state[existingItemIndex].kuantitas += 1
      } else {
        state.unshift({ name, price, stocks, image, kuantitas, type })
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.splice(action.payload, 1)
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const itemName = action.payload
      return state.map((item) => {
        if (item.name === itemName) {
          return {
            ...item,
            kuantitas: item.kuantitas + 1,
          }
        }
        return item
      })
    },

    decrementQuantity(state, action: PayloadAction<string>) {
      const itemName = action.payload;
      const itemIndex = state.findIndex((item) => item.name === itemName);
      if (itemIndex !== -1 && state[itemIndex].kuantitas > 1) {
        state[itemIndex].kuantitas -= 1;
      } else {
        state.splice(itemIndex, 1)
      }
    },
  },
})

export const { addToCart, removeItemFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer

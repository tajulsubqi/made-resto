export interface Product {
  name: string
  price: number
  stocks: number
  image: string
  type: "cold" | "hot" | string
}

export interface CartItem extends Product {
  kuantitas: number
}

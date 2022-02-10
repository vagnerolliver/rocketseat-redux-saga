export interface Product {
  id: number
  title: string
  price: number
}

export interface CartItems {
  product: Product;
  quantity: number
}

export interface CartState {
    items: CartItems[]
}
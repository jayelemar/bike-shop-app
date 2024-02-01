import { FC } from "react"
import { CartEntry } from "use-shopping-cart/core"

type CartItemProps = {
  key:string,
  item: CartEntry
}

const CartItem:FC<CartItemProps> = ({ item }) => {
  return (
    <div>{item.name}</div>
  )
}

export default CartItem
import { FC } from "react"
import { CartEntry } from "use-shopping-cart/core"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "@/app/lib/sanity"
import {FaPlus, FaMinus, FaX} from 'react-icons/fa6'
import Image from "next/image"


type CartItemProps = {
  key:string,
  item: CartEntry
}

const CartItem:FC<CartItemProps> = ({ item }) => {
  const {removeItem, incrementItem, decrementItem} = useShoppingCart();

  const handleRemoveItem = () => {
    removeItem(item.id)
  };

  const handleDecrementItem = () => {
    decrementItem(item.id)
  };

  const handleIncrementItem = () => {
    incrementItem(item.id)
  };

  return (
    <div className="flex flex-row w-full justify-between mb-4 items-center h-[120px] border-b relative">
      {/* image */}
      <div className="w-[110px] h-[100px] relative">
        {item.images && item.images[0] && (
          <Image 
            src={urlFor(item.images[0]).url()} 
            fill alt={item.name} 
            priority 
            sizes="(max-width: 110px) 110px, 110px"
            className="object-contain"
          />
        )}
      </div>
      {/* name, price, quantity, remove */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between w-full relative">
          <h5>{item.name}</h5>
          <button title="btn" onClick={handleRemoveItem}>
            <FaX className="text-sm"/>
          </button>
        </div>
        {/* increment, decrement, item-price */}
        <div className="flex item-center justify-between w-full relative">
          <div className="flex gap-4 w-full">
            <button title="btn" onClick={handleDecrementItem}>
              <FaMinus className="text-[10ox]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button title="btn" onClick={handleIncrementItem}>
              <FaPlus className="text-[10ox]" />
            </button>
          </div>
            <div className="font-semibold text-balance text-right">{item.price*item.quantity}</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
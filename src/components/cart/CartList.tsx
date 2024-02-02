import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { ScrollArea } from '../ui/scroll-area'
import CartItem from './CartItem'

const CartList = () => {
  const { cartCount, cartDetails } = useShoppingCart()
  return (
    <>
    {cartCount === 0 ? ( 
      <div className="flex flex-col justify-center items-center w-full h-[350px]">
        <h5 className="text-black/50">
          Your cart is empty
        </h5>
      </div> 
    ) : ( 

          <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4 pt-2">
          {cartDetails && 
          Object.entries(cartDetails).map(([key, item]) => {
            return <CartItem key={key} item={item}/>
          })}
        </ScrollArea>

    )}
  </>
  )
}

export default CartList
"use client";
import CartItem from "./CartItem";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useShoppingCart } from "use-shopping-cart";

const CartSidebar = () => {
  const { cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice} = useShoppingCart()
  return (
    <div>
      <Sheet 
        open={shouldDisplayCart} 
        onOpenChange={() => handleCartClick()}
      >
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle className="text-left mb-12">My Shopping Cart ({cartCount})</SheetTitle>
          </SheetHeader>
          <>
            {cartCount === 0 ? <div>Your cart is empty</div> 
              : <ScrollArea>
                  {cartDetails && Object.entries(cartDetails).map(([key, item]) => {
                    return <CartItem key={key} item={item}/>
                  })}
                </ScrollArea>
            }
          </>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default CartSidebar
"use client";

import CheckoutBtn from "../common/CheckoutBtn";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { useShoppingCart } from "use-shopping-cart";

import CartList from "./CartList";

const CartSidebar = () => {
  const { cartCount, shouldDisplayCart, handleCartClick, totalPrice} = useShoppingCart()

  return (
    <div >
      <Sheet 
        open={shouldDisplayCart} 
        onOpenChange={() => handleCartClick()}
      >
        <SheetContent className="bg-white ">
          <SheetHeader className="">
            <SheetTitle className="text-left">
              My Shopping Cart ({cartCount})
            </SheetTitle>
          </SheetHeader>

          <div className="h-full relative">
            <CartList/>

            {cartCount && cartCount > 0 && 
              <div className="flex flex-col justify-center items-center absolute w-full bottom-4 z-10">
                <div className="flex justify-between font-semibold w-full ">
                  <div className="uppercase mb-1">Total</div>
                  <div className="">&#8369;{totalPrice}</div>
                </div>
                <CheckoutBtn/>
              </div>
            }

          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default CartSidebar
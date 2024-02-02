import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const CheckoutBtn = () => {
  const {redirectToCheckout} = useShoppingCart();

  const handleCheckout = async () => {
    try {
      const response = await redirectToCheckout();
      if(response?.error) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <button 
      onClick={handleCheckout}
      className='btn btn-primary w-full'
    >
      Proceed to checkout
    </button>
  )
}

export default CheckoutBtn
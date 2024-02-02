'use client';
import { FC, ReactNode } from 'react';
import { CartProvider as CProvider} from 'use-shopping-cart'

type CartProviderProps = {
  children: ReactNode
}

const CartProvider:FC<CartProviderProps> = ({ children }) => {
  return (
    <CProvider 
      mode='payment' 
      cartMode='client-only' 
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY ?? ''}
      successUrl='http://localhost:3000/stripe/success'
      cancelUrl='http://localhost:3000/stripe/error'
      language='en-US'
      currency='PHP'
      billingAddressCollection={true}
      shouldPersist={true}
    >
      { children }
    </CProvider>
  )
}
export default CartProvider

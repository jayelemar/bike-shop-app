"use client";
import { FC, ReactNode } from "react";
import { CartProvider as CProvider } from "use-shopping-cart";

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_LOCAL_URL
      : process.env.NEXT_PUBLIC_FRONT_END_URL;

  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY ?? ""}
      successUrl={`${baseUrl}/stripe/success`}
      cancelUrl={`${baseUrl}/stripe/error`}
      language="en-US"
      currency="PHP"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};
export default CartProvider;

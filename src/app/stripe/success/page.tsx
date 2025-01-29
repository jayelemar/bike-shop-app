"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

const SuccessPage = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="mb-4 text-center">
          Your Payment was successful! Thank you!
        </h3>
        <Link href="/">
          <button className="btn btn-primary mx-auto">Back to homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;

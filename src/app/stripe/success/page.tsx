"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

const SuccessPage = () => {
  const router = useRouter();
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="mb-4 text-center">
          Your Payment was successful! Thank you!
        </h3>

        <button className="btn btn-primary mx-auto" onClick={handleClick}>
          Back to homepage
        </button>
      </div>
    </section>
  );
};

export default SuccessPage;

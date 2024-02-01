'use client';

import React, { FC, ReactNode } from 'react'
import { useShoppingCart } from 'use-shopping-cart';

type AddToCartProps = {
  name: string,
  currency: string, 
  description: string, 
  images: string, 
  price: number, 
  btnStyles: string;
  text?: string,
  icon: ReactNode,
  id: string
}

const AddToCartBtn:FC<AddToCartProps> = ({ 
  name,
  currency, 
  description, 
  images, 
  price, 
  btnStyles, 
  text, 
  icon, 
  id,
}) => {
  
  const { addItem } = useShoppingCart()
  const generateSKU = () => {
    return `${name}-${id}`;
  };

  const generatedSKU = generateSKU()

  const handleAddToCart = () => {
    addItem(bike)
  }
  
  const bike = {
    name: name,
    currency: currency,
    description: description,
    images: images,
    price: price,
    sku: generatedSKU
  }


  return (
    <button 
      onClick={() => handleAddToCart()}
      className={`${btnStyles}`}
    >
      <div className="">{text}</div>
      <div className="">{icon}</div>
    </button>
  )
}

export default AddToCartBtn

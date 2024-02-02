'use client';

import React, { FC, ReactNode } from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from '../ui/use-toast';

type AddToCartProps = {
  name: string,
  currency: string, 
  description: string, 
  images: string, 
  price: number, 
  btnStyles: string;
  text?: string,
  icon: ReactNode,
  id: string,
  price_id: string,
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
  price_id
}) => {
  
  const { addItem } = useShoppingCart()
  const { toast } = useToast();


  const generateSKU = () => {
    return `${name}-${id}`;
  };

  const generatedSKU = generateSKU()

  const handleAddToCart = () => {
    addItem({...bike, count:1})
    toast({
      title: `${name} has been added to the cart`
    })
  }


  const bike = {
    name: name,
    currency: currency,
    description: description,
    images: images,
    price: price,
    sku: generatedSKU,
    price_id: price_id,
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

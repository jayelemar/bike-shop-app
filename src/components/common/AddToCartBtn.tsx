import React, { FC, ReactNode } from 'react'

type AddToCartProps = {
  btnStyles: string;
  text: string,
  icon: ReactNode
}

const AddToCartBtn:FC<AddToCartProps> = ({ btnStyles, text, icon }) => {
  return (
    <button className={`${btnStyles}`}>
      <div className="">{text}</div>
      <div className="">{icon}</div>
    </button>
  )
}

export default AddToCartBtn

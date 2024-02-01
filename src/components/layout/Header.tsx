"use client"
import Link from 'next/link'
import React from 'react'
import { CgShoppingBag } from 'react-icons/cg'
import Nav from '../common/Nav'
import CartSidebar from '../cart/CartSidebar'
import { useShoppingCart } from 'use-shopping-cart'



const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart()

  return (
    <header className='bg-white shadow-lg sticky top-0 py-8 z-40'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/' className='hover:text-current'>
          <h1 className='text-[26px]'>
            <span className='text-accent'>B</span>ike Me
          </h1>
        </Link>
        <div className="flex items-center gap-7">
          <Nav/>
          <div 
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag size={26} />
            <div className="bg-accent w-5 h-5 absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
              { cartCount }
            </div>
          </div>
          <CartSidebar/>
        </div>
      </div>
    </header>
  )
}

export default Header

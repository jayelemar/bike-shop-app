'use client'

import AddToCartBtn from './AddToCartBtn'

import React, { FC } from 'react'
import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { CgEye, CgShoppingBag } from 'react-icons/cg'

type Category = {
  name: string,
}

type BikeProps = {
  bike: {
    _id: string,
    name: string,
    description: string,
    images: any,
    price: number,
    slug: string,
    categories: Category[],
    price_id: string,
  }
}

const Bike:FC<BikeProps> = ({ bike }) => {
  const popularBikeCat = bike.categories.find((cat) => cat.name === 'popular' );
  return (
    <div className='group'>
      <div className="border border-primary/10 h-[328px] mb-4 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* badge */}
          {popularBikeCat ? (
            <div className="absolute top-0 left-0 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          ):(null)}
          <Image 
            src={urlFor(bike.images[0]).url()}
            width={240}
            height={147}
            alt=''
            priority
          />
        </div>
        {/* btn group */}
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
            <AddToCartBtn 
              name={bike.name}
              currency='PHP'
              description={bike.description}
              images={bike.images}
              price={bike.price}
              btnStyles='btn btn-icon btn-accent' 
              icon={<CgShoppingBag/>}
              id={bike._id}
              price_id={bike.price_id}
            />
            <Link href={`/product/${bike.slug}`}>
              <button title={`${bike.slug}`} className='btn-icon btn-primary'><CgEye/></button>
            </Link>
        </div>
      </div>
      <h5 className='text-grey-400 font-semibold mb-2 text-start'>{bike.categories[0].name} bike</h5>
      <h4 className='mb-1 text-start'>{bike.name}</h4>
      <div className='text-lg font-bold text-accent text-start'>&#8369;{bike.price}</div>
    </div>
  )
}

export default Bike

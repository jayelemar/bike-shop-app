import { client, urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import AddToCartBtn from '@/components/common/AddToCartBtn'
import Link from 'next/link'

import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from 'lucide-react'
import { getProductData } from '@/services/productServices'
import { FC } from 'react'

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

const ProductDetails:FC<ProductDetailsProps> = async ({ params }) => {
  const bike = await getProductData(params.slug);
  console.log(bike);

  if (!bike) {
    return null
  } else {
    const {
      _id, //
      name, //
      description, //
      images, //
      price, //
      price_id, //
    } = bike
  }

  return (
    <section className='pt-24 pb-32'>
      <div className="container nx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* img */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image 
              src={urlFor(bike.images[0]).url()} 
              width={473} 
              height={290} 
              priority 
              alt='' 
            />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-center gap-10">
            <Link href='/' className='flex items-center gap-2 font-semibold'>
              <ChevronLeft size={20}/>
              Back to home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div className="">
                <h3>{bike.name}</h3>
                <p className='text-lg font-semibold'>&#8369;{bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCartBtn 
                name={bike.name}
                currency='PHP'
                description={bike.description}
                images={bike.images}
                price={bike.price}
                btnStyles='btn btn-accent' 
                text='Add to cart'
                price_id={bike.price_id}
                icon=''
                id={bike._id}
              />
                


            </div>
            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className='text-accent'/>
                <p>Free shipping on orders over &#8369;130000</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className='text-accent'/>
                <p>Free return for 30 days.</p>
              </div>
              <div className="flex gap-2">
                <Bike size={20} className='text-accent'/>
                <p>The bicycles are partially assembled and benefit from transport insurance.</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className='text-accent'/>
                <p>Fast delivery</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails

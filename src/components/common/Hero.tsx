import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='py-0 h-[520px] relative overflow-hidden bg-primary/5'>
      <div className="container flex justify-center items-center w-full">
        <div className="flex items-center justify-center">
          {/* text */}
          <div className="w-full lg:max-w-[580px] h-[520px]  flex flex-col justify-center items-start">
            <h1 className='slogan text-center lg:text-[60px] xl:text-[77px] lg:text-left mb-6'>
            Bike <span className='whitespace-nowrap'>The Streets,</span> <span className='whitespace-nowrap'>Enjoy the</span> ride.
            </h1>
            <p className='mb-10 text-lg max-w-[500px] mx-auto text-center lg:text-left lg:mx-0'>
              Whether for recreation or transportation, we’ve designed the right bike for you. 
            </p>
            {/* btn group */}
            <div className="flex items-center gap-4 mx-auto lg:mx-0">
              <Link href='our-bikes' className='mx-auto md:mx-0'>
                <button className='btn btn-primary'>Shop now</button>
              </Link>
              <Link href='our-bikes' className='mx-auto md:mx-0'>
                <button className='btn btn-accent'>Our Bikes</button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:flex">
            <Image src='/hero/bike.png' width={765} height={480} alt='' quality={100}  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
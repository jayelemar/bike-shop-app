import { useBikeStore } from '@/store/bikeStore'
import React from 'react'
import Bike from '../Bike'

const BikeCategoriesList = () => {
  const {filteredBikes} = useBikeStore()

  return (
    <div className="w-full lg:w-[800px] 2xl:w-[1050px] ml-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7">
        {filteredBikes.map((bike, index) => {
            return (
              <Bike bike={bike} key={index}/>
            )
          })}
      </div>
    </div>
  )
}

export default BikeCategoriesList
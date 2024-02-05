import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { useBikeStore } from '@/store/bikeStore'
import { Product } from '@/types/types'
import React, { FC, useEffect, useState } from 'react'

type BikeCategoriesSidebarProps = {
  bikes: Product[],
}

const BikeCategoriesSidebar:FC<BikeCategoriesSidebarProps> = ({ bikes }) => {
  const [category, setCategory] = useState('all')
  const [price, setPrice] = useState(90000)

  const { filteredBikes, setFilteredBikes } = useBikeStore()
  
  useEffect(() => {
    const newFilteredBikes = bikes.filter((bike) => {
      const categoryMatch = (category === 'all') 
        ? bikes 
        : bike.categories.some((cat) => cat.name === category)
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch
    })
    setFilteredBikes(newFilteredBikes)
  }, [category,price, bikes, setFilteredBikes])
  
  return (
    <aside className="w-full p-4 mb-8 xl:w-[300px] 2xl:h-[84vh] rounded-t xl:fixed z-0">
      <RadioGroup defaultValue="all" className="flex flex-col gap-6 mb-12">

        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="all" 
            id="all" 
            onClick={() => setCategory("all")}
          />
          <Label htmlFor="all">All</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="road" 
            id="road"
            onClick={() => setCategory("road")}
          />
          <Label htmlFor="road">Road</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="professional" 
            id="professional"
            onClick={() => setCategory("professional")}
          />
          <Label htmlFor="professional">Professional</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="extreme" 
            id="extreme"
            onClick={() => setCategory("extreme")}
          />
          <Label htmlFor="extreme">Extreme</Label>
        </div>

      </RadioGroup>
      {/* Price Slider */}
      <div className="max-w-56">
        <div className="text-lg mb-4 font-medium">
          Max Price: <span className="text-accent font-semibold ml-2">&#8369;{price}</span>
          <span className="ml-2">
          (
            {filteredBikes.length > 1
              ? `${filteredBikes.length} items`
              : filteredBikes.length === 0
              ? `${filteredBikes.length} items`
              : `${filteredBikes.length} item`
            }
          )
          </span>
        </div>
        <Slider 
          defaultValue={[900000]} 
          max={60_000} 
          step={1} 
          onValueChange={(value) => setPrice(value[0])}
        />
      </div>
    </aside>
  )
}

export default BikeCategoriesSidebar
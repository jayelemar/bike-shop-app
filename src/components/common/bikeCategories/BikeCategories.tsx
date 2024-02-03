'use client';

import { Product } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { Slider } from "../../ui/slider";
import Bike from "../Bike";
import BikeCategoriesSidebar from "./BikeCategoriesSidebar";
import { useBikeStore } from "@/store/bikeStore";
import BikeCategoriesList from "./BikeCategoriesList";


type BikeCategoriesProps = {
  bikes: Product[]
}

const BikeCategories:FC<BikeCategoriesProps> = ({ bikes }) => {

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Sidebar */}
            <BikeCategoriesSidebar bikes={bikes} />
          {/* Bike List */}
            <BikeCategoriesList />
        </div>
      </div>
    </section>
  )
}

export default BikeCategories
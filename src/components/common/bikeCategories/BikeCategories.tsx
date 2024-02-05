'use client';

import { Product } from "@/types/types";
import { FC } from "react";

import Bike from "../Bike";
import BikeCategoriesSidebar from "./BikeCategoriesSidebar";

import BikeCategoriesList from "./BikeCategoriesList";


type BikeCategoriesProps = {
  bikes: Product[]
}

const BikeCategories:FC<BikeCategoriesProps> = ({ bikes }) => {

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">

          {/* Sidebar */}
          <div className="">
            <BikeCategoriesSidebar bikes={bikes} />
          </div>

          {/* Bike List */}
          <div className="">
            <BikeCategoriesList />
          </div>

        </div>
      </div>
    </section>
  )
}

export default BikeCategories
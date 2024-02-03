import { getData } from "@/services/productServices";
import Link from "next/link";
import PopularBikeCarousel from "./PopularBikeCarousel";



const PopularBikes = async () => {
  const bikes = await getData()

  return (
    <section className="py-24 ">
      <div className="text-center flex flex-col">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="mb-[30px]">The World&apos;s Premium Brands In one Destination.</p>
        <div className="mx-6">

        <PopularBikeCarousel bikes={bikes}/>
        </div>
        <Link href='our-bikes'>
          <button className="btn btn-accent mx-auto">See all bikes</button>
        </Link>
      </div>
      Popular Bikes 
    </section>
  )
};

export default PopularBikes;


import Hero from '@/components/common/Hero';
import PopularBikes from '@/components/common/popularBike/PopularBikes';
import React from 'react';

const Home =  () => {

    return (
      <main>
        <Hero/>
        <PopularBikes />
        <div className="h-[2000px]"></div>
      </main>
    );

};
export default Home;

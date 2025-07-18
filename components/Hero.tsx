'use client';
import React from 'react';
import Image from "next/legacy/image";
import CountUp from 'react-countup';
import heroBg from '../public/estate.jpg'; 

const Hero = () => {
  return (
 <section className="relative w-full h-[92vh] mb-8">
  <Image
    src={heroBg}
    alt="Hero Background"
    layout="fill"
    objectFit="cover"
    className="absolute top-0 left-0 z-0"
    priority
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

 
  <div className="relative z-20 h-full flex flex-col justify-center items-start text-left px-4 md:px-20 text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
      Discover the Perfect Place to Call Home
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-lg">
      Explore premium homes available for purchase or lease in your preferred areas.
    </p>
    <button className="bg-[#00aeff] hover:bg-[#0090d2] text-white px-6 py-3 rounded-md font-semibold transition duration-300">
      Get Started
    </button>
   
<div className="flex items-center justify-center gap-6 mt-4">
  {/* Block 1 */}
  <div className="text-center">
    <h1 className="text-4xl font-bold text-blue-600">
      <CountUp end={500} duration={2} />+
    </h1>
    <p className="text-sm text-white">Verified listings</p>
  </div>

  {/* Divider */}
  <div className="w-px h-12 bg-gray-200"></div>

  {/* Block 2 */}
  <div className="text-center">
    <h1 className="text-4xl font-bold text-blue-600">
      <CountUp end={11} duration={2} separator="," />k
    </h1>
    <p className="text-sm text-white">Happy clients served</p>
  </div>

    {/* Divider */}
  <div className="w-px h-12 bg-gray-200"></div>

  {/* Block 2 */}
  <div className="text-center">
    <h1 className="text-4xl font-bold text-blue-600">
      <CountUp end={10} duration={2} separator="," />
    </h1>
    <p className="text-sm text-white">Prime Locations</p>
  </div>
  
</div>
  </div>
</section>

  );
};

export default Hero;

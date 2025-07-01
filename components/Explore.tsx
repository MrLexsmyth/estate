'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Property1 from '../public/property1.svg';
import Property2 from '../public/property2.svg';
import Property3 from '../public/property3.svg';
import Property4 from '../public/property4.svg';

const cardData = [
  { label: 'Home & Apartment', icon: Property1 },
  { label: 'Villa', icon: Property2 },
  { label: 'Studio', icon: Property3 },
  { label: 'Office', icon: Property4 },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const  // 👈 Fix for TypeScript
    }
  }
};

const Explore = () => {
  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="bg-white mt-4 lg:h-[400px] rounded-lg shadow-md flex flex-col md:flex-row md:items-center dark:bg-gray-800 dark:text-white p-0 md:p-4"
      >
        <motion.div variants={cardVariants} className="p-10 w-full md:w-[35%]">
          <h1 className="text-[34px] sm:text-[32px] md:text-[38px] font-medium leading-[36px] sm:leading-[42px] md:leading-[45.6px] text-[#192839] dark:text-white">
            Explore by
            <br className="hidden lg:block" /> Property Type
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Find your ideal space by browsing homes, apartments,
            <br className="hidden lg:block" />
            lands, studio, and more...
          </p>

         <button className="relative overflow-hidden group bg-[#00aeff] text-white px-8 py-3 mt-3 rounded-md font-semibold border border-[#00aeff] transition duration-600">
  <span className="relative z-10">View All Property</span>
  <span className="absolute inset-0 bg-darkblue scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
</button>

        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-around gap-4 font-medium text-[18px] leading-[24px] text-[#192839] dark:text-white w-full md:w-[65%]"
        >
          {cardData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="property-card w-full sm:w-full md:w-[48%] lg:w-[45%] h-[200px] md:h-auto gap-4 p-0 md:p-4 rounded-lg flex flex-col justify-center items-center text-center transition-colors duration-300 hover:text-[#00aeff]"
            >
              <Image src={item.icon} alt={item.label} width={60} height={60} />
              <Link
                href="/"
                className="mt-2 transition-colors duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Explore;

'use client';
import Image from 'next/image';
import { motion} from 'framer-motion';
import React from 'react';
import Newletter from '../../../components/Newletter';
import NewsletterImag from '../../../public/newsletter.jpg';


const page = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="w-full h-64 relative">
        <Image
          src={NewsletterImag}
          alt="Newsletter"
          fill
          priority
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center">
            About Us
          </h2>
        </div>
      </div>

      {/* Hero Text */}
     <h1 className="section-heading text-blue">
        We&apos;re dedicated to helping people find homes that reflect their lifestyle and dreams.
        Explore the journey behind our platform.
      </h1>

      {/* Zigzag Sections */}
      <section className="space-y-20 px-6 py-12 max-w-7xl mx-auto mb-12">
        {/* Our Mission */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-blue mb-4 mt-4">Our Mission</h2>
            <p className="text-gray-700 text-base leading-7 mb-3">
              At BrightO, our mission is simple: to simplify the process of finding, renting, or
              buying a home through a modern and intuitive platform.
            </p>
            <p className="text-gray-700 text-base leading-7 mb-3">
              We blend technology and a human-centered approach to give you transparency, speed, and
              access to curated listings across Nigeria and beyond.
            </p>
            <p className="text-gray-700 text-base leading-7">
              Whether you&apos;re a first-time buyer, an investor, or just exploring, BrightO is your
              trusted companion on every step of the journey.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-72 md:h-96">
             
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="md:w-1/2">
            <div className="relative w-full h-72 md:h-96">
              
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-blue mb-4 mt-4">Our Vision</h2>
            <p className="text-gray-700 text-base leading-7 mb-3">
              We envision a world where finding a home is as easy as a few clicks, where technology
              empowers people to make informed decisions, and where every individual has access to
              the best properties available.
            </p>
            <p className="text-gray-700 text-base leading-7">
              BrightO aims to be the leading platform that connects people with their dream homes,
              transforming the real estate experience for everyone.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-blue mb-4 mt-4">Our Values</h2>
            <p className="text-gray-700 text-base leading-7 mb-3">
              We believe in transparency, integrity, and innovation. Our platform is designed to
              empower users with the information they need to make informed decisions.
            </p>
            <p className="text-gray-700 text-base leading-7 mb-3">
              We are committed to providing exceptional customer service and building lasting
              relationships with our users.
            </p>
            <p className="text-gray-700 text-base leading-7">
              At BrightO, we strive to create a community where everyone feels valued and supported
              in their real estate journey.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-72 md:h-96">
              
            </div>
          </div>
        </div>
      </section>
       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
     
      >
        <Newletter />
      </motion.div>
    </section>
  );
};

export default page;


'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import PropertyCarousel from '../../components/PropertyCarousel';
import Explore from '../../components/Explore';
import Newletter from '../../components/Newletter';
import Hero from '../../components/Hero';


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="alex">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Hero />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        className="hero-text text-center px-4 mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold text-[#192839] mb-2">
          Find Your Ideal Home in Nigeria
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          BrightO provides powerful tools and trusted services to help you search, buy or sell with confidence.
        </p>
      </motion.div>

      {/* Property Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <PropertyCarousel />
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="max-w-7xl mx-auto mb-12 mt-8 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: 'https://cdn.lordicon.com/msoeawqm.json',
              title: '🏡 Find Your Home',
              desc: 'Explore listings tailored to your lifestyle and budget across Nigeria.',
              extra: 'Peaceful, connected areas for families and professionals.',
            },
            {
              icon: 'https://cdn.lordicon.com/nocovwne.json',
              title: '🔍 Smart Search',
              desc: 'Filter properties by location, type, price, and more.',
            },
            {
              icon: 'https://cdn.lordicon.com/bhfjfgqz.json',
              title: '💼 Verified Agents',
              desc: 'Connect with trusted real estate agents ready to help.',
            },
            {
              icon: 'https://cdn.lordicon.com/tftaqjwp.json',
              title: '📈 Market Insights',
              desc: 'Stay ahead with real-time pricing trends and opportunities.',
            },
            {
              icon: 'https://cdn.lordicon.com/tdrtiskw.json',
              title: '💬 24/7 Support',
              desc: 'Get expert help any time — our team is always available.',
            },
            {
              icon: 'https://cdn.lordicon.com/pflszboa.json',
              title: '🔒 Secure Deals',
              desc: 'Buy or rent with confidence — all listings are verified.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-gray-800 dark:text-white"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <lord-icon
                      src="${item.icon}"
                      trigger="hover"
                      colors="primary:#121331,secondary:#08a88a"
                      style="width:80px;height:100px">
                    </lord-icon>`,
                }}
              />
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              {item.extra && (
                <p className="text-gray-600 dark:text-gray-300">{item.extra}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Explore Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Explore />
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Newletter />
      </motion.div>
    </div>
  );
}

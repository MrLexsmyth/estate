'use client'

import { useState } from 'react'
import Image from "next/legacy/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const properties = [
  {
    src: '/estate.jpg',
    type: 'Duplex',
    price: '₦25,000,000',
    location:'Lagos State',
    description: 'Spacious modern duplex with a garden',
    bedrooms: 4,
  },
  {
    src: '/pro3.jpg',
    type: 'Apartment',
    price: '₦18,500,000',
     location:'Lagos State',
    description: '3-bedroom apartment in Lekki Phase 1',
    bedrooms: 3,
  },
  {
    src: '/pro2.jpg',
    type: 'Bungalow',
    price: '₦12,000,000',
     location:'Oyo State',
    description: 'Family-friendly bungalow in Ibadan',
    bedrooms: 3,
  },
  {
    src: '/estate2.jpg',
    type: 'Detached',
    price: '₦32,000,000',
     location:'Lagos State',
    description: 'Luxury detached house with pool',
    bedrooms: 5,
  },
  {
    src: '/estate3.jpg',
    type: 'Flat',
    price: '₦8,500,000',
     location:'Abuja',
    description: 'Compact 2-bedroom flat in Abuja',
    bedrooms: 2,
  },
  {
    src: '/estate4.jpg',
    type: 'Terrace',
    price: '₦20,000,000',
     location:'Osun State',
    description: 'Modern terrace in GRA',
    bedrooms: 4,
  },
  {
    src: '/pro22.png',
    type: 'Semi-Detached',
    price: '₦22,000,000',
     location:'Edo State',
    description: 'Semi-detached home with parking',
    bedrooms: 4,
  },
  {
    src: '/estate.jpg',
    type: 'Mansion',
    price: '₦85,000,000',
     location:'Lagos State',
    description: 'Lavish mansion in Banana Island',
    bedrooms: 6,
  },
]

export default function PropertyCarousel() {
  const [selectedProperty, setSelectedProperty] = useState<null | typeof properties[0]>(null)

  return (
    <div className="w-full px-4 py-10 relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {properties.map((property, index) => (
          <SwiperSlide key={index}>
            <div
              className="cursor-pointer overflow-hidden rounded-xl shadow hover:scale-[1.02] transition-transform duration-300 bg-white dark:bg-gray-800"
              onClick={() => setSelectedProperty(property)}
            >
              <Image
                src={property.src}
                alt={`Property ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {property.type}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{property.description}</p>
                <h2>{property.location}</h2>
                <div className="flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span>{property.price}</span>
                  <span>{property.bedrooms} Bed</span>
                </div>
                
                  <button className="relative overflow-hidden group bg-[#00aeff] text-white px-6 py-2 rounded-md font-semibold border border-[#00aeff] transition duration-600">
  <span className="relative z-10">More Details</span>
  <span className="absolute inset-0 bg-darkblue scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 max-w-3xl w-full rounded-lg overflow-hidden shadow-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProperty.src}
                alt="Preview"
                width={1000}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4 text-gray-800 dark:text-white">
                <h2 className="text-2xl font-bold">{selectedProperty.type}</h2>
                <p className="text-sm">{selectedProperty.description}</p>
                 <h2>{selectedProperty.location}</h2>
                <div className="flex justify-between text-sm font-medium">
                  <span>Price: <strong>{selectedProperty.price}</strong></span>
                  <span>Bedrooms: <strong>{selectedProperty.bedrooms}</strong></span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

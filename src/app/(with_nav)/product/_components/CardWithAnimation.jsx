'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
export const CardWithAnimation = ({ productDetails }) => {
   const [isHovered, setHovered] = useState(false);
   return (
      <motion.div
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         className='relative overflow-hidden'
      >
         <motion.div
            initial={{
               opacity: 0,
               scale: 0,
            }}
            transition={{ ease: 'easeInOut' }}
            animate={isHovered ? { opacity: 1, scale: 1 } : {}}
            className='absolute top-2 right-2 bg-white px-6 py-[6px] rounded-full text-xs font-thin z-10'
         >
            <span className='mr-1'>&#2547;</span>
            <span className='text-sm'>{productDetails.price}</span>
         </motion.div>
         <div className='max-w-full rounded-md overflow-hidden'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               className={`h-auto transition-all ease-in-out duration-200 ${
                  isHovered ? 'scale-102' : ''
               }`}
               src={productDetails.image}
               alt={productDetails.title}
            />
         </div>
         <motion.div
            initial={{
               opacity: 0,
               scale: 1,
            }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : {}}
            className='absolute bottom-0 w-full bg-white px-4 py-4 rounded-md z-10'
         >
            <div className='relative'>
               <h2 className='truncate text-2xl font-medium relative w-[75%] mb-1'>
                  <Link
                     href={`/product/${productDetails.id}`}
                     className='transition-all hover:text-gray-500'
                  >
                     {productDetails.title}
                  </Link>
               </h2>
               <p className='line-clamp-3 text-xs font-thin'>
                  {productDetails.description}
               </p>
               <Link
                  href={`/product/${productDetails.id}`}
                  className='transition-all bg-gray-700 w-10 flex items-center justify-center aspect-square rounded-full absolute right-3 top-[-32px] z-20 hover:bg-gray-500'
               >
                  <IoIosArrowForward size={24} color='white' />
               </Link>
            </div>
         </motion.div>
      </motion.div>
   );
};

'use client';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

export default function ProductDetails() {
   const type = Cookies.get('type');
   const [productDetails, setProductDetails] = useState();
   const params = useParams();
   useEffect(() => {
      fetch(
         `${process.env.NEXT_PUBLIC_BASE_URL}/api/product-single?id=${params.id}`
      )
         .then((res) => res.json())
         .then((res) => {
            setProductDetails(res);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [params]);
   return (
      <div className='flex items-center justify-center'>
         <div className='w-full sm:w-[600px] bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between pb-3 border-gray-400'>
               <Link
                  href='/product'
                  className='flex items-center gap-2 hover:cursor-pointer'
               >
                  <IoIosArrowBack size={14} />
                  <span className='text-sm font-thin'>
                     BACK TO ALL PRODUCTS
                  </span>
               </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
               <div className='w-full sm:w-[50%] h-[200px] sm:h-[300px] max-w-full overflow-hidden flex items-center justify-center rounded-md'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={productDetails?.image}
                     alt={productDetails?.title}
                     width='100%'
                     height='300px'
                  />
               </div>
               <div className='w-full sm:w-[50%] sm:px-6 flex flex-col items-start justify-between'>
                  <div>
                     <h1 className='text-md sm:text-4xl font-medium'>
                        {productDetails?.title}
                     </h1>
                     <p className='text-xs sm:text-xl font-thin'>Shoes</p>
                     <p className='text-sm sm:text-sm font-medium'>
                        <span className='mr-1'>&#2547;</span>
                        {productDetails?.price}
                     </p>
                     <p className='text-xs font-thin mb-2'>
                        {productDetails?.description}
                     </p>
                  </div>
                  <div className='w-full flex items-center justify-start gap-2 mb-2'>
                     <button
                        type='button'
                        className='transition-all ease-in-out duration-200 px-2 py-1 border border-gray-500 text-[8px] rounded-2xl hover:bg-gray-500 hover:text-white hover:cursor-pointer'
                     >
                        ADD TO CART
                     </button>
                     <button
                        type='button'
                        className='transition-all ease-in-out duration-200 px-2 py-1 border border-gray-500 text-[8px] rounded-2xl hover:bg-gray-500 hover:text-white hover:cursor-pointer'
                     >
                        WISHLIST
                     </button>
                  </div>
                  {type == 'admin' ? (
                     <div className='w-full flex items-center justify-start gap-2 py-2 border-t border-gray-700'>
                        <button
                           type='button'
                           className='transition-all ease-in-out duration-200 px-2 py-1 border border-gray-500 text-[8px] rounded-2xl hover:bg-gray-500 hover:text-white hover:cursor-pointer'
                        >
                           ADD
                        </button>
                        <button
                           type='button'
                           className='transition-all ease-in-out duration-200 px-2 py-1 border border-gray-500 text-[8px] rounded-2xl hover:bg-gray-500 hover:text-white hover:cursor-pointer'
                        >
                           DELETE
                        </button>
                        <button
                           type='button'
                           className='transition-all ease-in-out duration-200 px-2 py-1 border border-gray-500 text-[8px] rounded-2xl hover:bg-gray-500 hover:text-white hover:cursor-pointer'
                        >
                           UPDATE
                        </button>
                     </div>
                  ) : (
                     <></>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

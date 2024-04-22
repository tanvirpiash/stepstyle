import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
export default function ProductCard({ productDetails }) {
   return (
      <div className='relative overflow-hidden pb-10'>
         <div className='absolute top-2 right-2 bg-white px-1 px-6 py-[6px] rounded-full text-xs font-thin z-10'>
            <span className='mr-1'>&#2547;</span>
            <span className='text-sm font-normal'>{productDetails.price}</span>
         </div>
         <div className='h-auto max-w-full rounded-md overflow-hidden'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               className={`transition-all ease-in-out duration-200 hover:scale-105`}
               src={productDetails.image}
               alt={productDetails.title}
            />
         </div>
         <div className='absolute bottom-0 w-full bg-white p-4 rounded-md z-10'>
            <div className='relative'>
               <h2 className='truncate text-xl font-medium relative w-[75%] mb-1'>
                  <Link
                     href={`/product/${productDetails.id}`}
                     className='transition-all hover:text-gray-500'
                  >
                     {productDetails.title}
                  </Link>
               </h2>
               <p className='line-clamp-3 text-xs font-thin text-pretty'>
                  {productDetails.description}
               </p>
               <Link
                  href={`/product/${productDetails.id}`}
                  className='transition-all bg-gray-700 w-10 flex items-center justify-center aspect-square rounded-full absolute right-3 top-[-32px] z-20 hover:bg-gray-500'
               >
                  <IoIosArrowForward
                     color='white'
                     className='w-6 aspect-square'
                  />
               </Link>
            </div>
         </div>
      </div>
   );
}

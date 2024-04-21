import Link from 'next/link';

export default function ProductCard({ productDetails }) {
   return (
      <div className='@container hover:scale-105 transition-all hover:z-10 bg-white shadow-xl rounded-lg overflow-hidden'>
         <div class='product'>
            <figure>
               <img
                  src={productDetails.image}
                  alt='Product Image'
                  class='product-image'
               />
            </figure>
            <div class='flex items-center justify-between relative'>
               <div class='flex-1 text-[#aaa] text-[0.85em] p-4'>
                  <h2 className=' rounded-md text-gray-600 text-2xl font-medium'>
                     {productDetails.title}
                  </h2>
                  <p className='text-pretty line-clamp-2'>
                     {productDetails.description}
                  </p>
               </div>
               <div class='w-[25%] text-[#9bb6aa] text-[3.5em] self-center mr-2'>
                  {productDetails.price}
               </div>
            </div>
         </div>
      </div>
   );
}

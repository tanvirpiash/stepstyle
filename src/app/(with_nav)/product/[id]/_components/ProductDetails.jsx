'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Modal } from 'react-responsive-modal';
export default function ProductDetails() {
   const type = Cookies.get('type');
   const [open, setOpen] = useState(false);
   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);
   return (
      <div class='card'>
         <div class='flex items-center justify-between'>
            <Link
               href='/product'
               className='w-[80%] p-2 bg-blue-700 hover:bg-gray-700'
            >
               <FaArrowLeft color='white' />
            </Link>
            <h3>New products</h3>
         </div>
         <div class='flex items-start justify-between'>
            <div class='flex flex-col items-start justify-start'>
               <div class='flex flex-col items-start justify-start'>
                  <h1>Nurton</h1>
                  <p class='sub'>Office Chair</p>
                  <p class='price'>$210.00</p>
               </div>
               <div class='max-w-full'>
                  <Image
                     height={400}
                     width={400}
                     src='/products/1.jpg'
                     alt='/products/1.jpg'
                  />
               </div>
            </div>
            <div class='flex flex-col items-end justify-start'>
               <span class='stock'>In stock</span>
               <div class='description'>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Vero voluptatem nam pariatur voluptate perferendis,
                     asperiores aspernatur! Porro similique consequatur, nobis
                     soluta minima, quasi laboriosam hic cupiditate perferendis
                     esse numquam magni.
                  </p>
               </div>
            </div>
         </div>
         <div class='flex items-center justify-end'>
            <div class='action'>
               <button
                  type='button'
                  className='bg-gray-700 text-white rounded-full border py-4 px-8 hover:bg-white hover:border-gray-700 hover:text-gray-700 hover:cursor-pointer'
               >
                  Add to cart
               </button>
            </div>
         </div>
         <div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal
               open={open}
               onClose={onCloseModal}
               center
               classNames={{
                  modal: 'rounded-md',
               }}
            >
               <h2>Simple centered modal</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
               </p>
            </Modal>
         </div>
      </div>
   );
}

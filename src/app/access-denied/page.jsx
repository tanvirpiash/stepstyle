import { IoIosRemoveCircle } from 'react-icons/io';
export const metadata = {
   title: 'Access Denied',
};
export default function page() {
   return (
      <section className='w-screen h-screen flex items-center justify-center'>
         <div className='flex flex-col gap-4 items-center'>
            <IoIosRemoveCircle color='#ef4444' size={128} />
            <h1 className='font-bold text-5xl text-gray-600'>Access Denied</h1>
            <p className='text-xl font-medium text-gray-500'>
               You do not have permission to view this page.
               <div className='mb-2'>
                  Please check your credentials and try again.
               </div>
               <div className='text-center'>
                  <strong className='text-gray-700 mr-2'>Error Code:</strong>
                  403
               </div>
            </p>
         </div>
      </section>
   );
}

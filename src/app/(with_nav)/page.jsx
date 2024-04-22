export const metadata = {
   title: 'Home',
};
export default function Home() {
   return (
      <section className='flex flex-col gap-2 sm:flex-row items-center justify-between flex-wrap'>
         <div className='bg-white rounded-md shadow-sm w-full sm:w-[49%] lg:w-[24%] lg:aspect-video p-4 flex flex-col gap-6 items-center justify-center @container'>
            <h2 className='text-sm text-[#878A99] font-semibold'>
               Total Product
            </h2>
            <p className='text-4xl text-[#1D489D]'>{12}</p>
         </div>
         <div className='bg-white rounded-md shadow-sm w-full sm:w-[49%] lg:w-[24%] lg:aspect-video p-4 flex flex-col gap-6 items-center justify-center @container'>
            <h2 className='text-sm text-[#878A99] font-semibold'>Total User</h2>
            <p className='text-4xl text-[#1D489D]'>{2}</p>
         </div>
         <div className='bg-white rounded-md shadow-sm w-full sm:w-[49%] lg:w-[24%] lg:aspect-video p-4 flex flex-col gap-6 items-center justify-center @container'>
            <h2 className='text-sm text-[#878A99] font-semibold'>Admin</h2>
            <p className='text-4xl text-[#1D489D]'>{1}</p>
         </div>
         <div className='bg-white rounded-md shadow-sm w-full sm:w-[49%] lg:w-[24%] lg:aspect-video p-4 flex flex-col gap-6 items-center justify-center @container'>
            <h2 className='text-sm text-[#878A99] font-semibold'>User</h2>
            <p className='text-4xl text-[#1D489D]'>{1}</p>
         </div>
      </section>
   );
}

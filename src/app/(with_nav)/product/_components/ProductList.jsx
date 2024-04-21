import { CardWithAnimation } from './CardWithAnimation';
import ProductCard from './ProductCard';

async function getAllProduct() {
   const products = await (
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product-list`)
   ).json();
   return products;
}

export default async function ProductList() {
   const products = await getAllProduct();
   let chunkSize = 3;
   let productInChunk = [];
   for (let index = 0; index < products.length; index += chunkSize) {
      productInChunk.push(products.slice(index, chunkSize + index));
   }
   return (
      <section>
         {/* <div className='w-full bg-white rounded-md py-4 p-6 mb-4'>
            <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
               All Products
            </h1>
         </div> */}

         {/* <div className=''>
            {products.map((e, index) => {
               return (
                  <div
                     key={`product-card-${typeof e}-${index}`}
                     className='w-[300px]'
                  >
                     <ProductCard productDetails={e} />
                  </div>
               );
            })}
         </div> */}
         {/* <ProductCard /> */}
         <div class='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {productInChunk.map((outer, outerIndex) => {
               return (
                  <div
                     class='grid gap-4 md:flex md:flex-col md:gap-4'
                     key={`product-in-chunk-outer-${outerIndex}`}
                  >
                     {outer.map((inner, innerIndex) => {
                        return (
                           <div
                              key={`product-in-chunk-inner-${innerIndex}`}
                              className='h-fit'
                           >
                              <CardWithAnimation productDetails={inner} />
                           </div>
                        );
                     })}
                  </div>
               );
            })}
            {/* <div class='grid gap-4'>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                     alt=''
                  />
               </div>
            </div>
            <div class='grid gap-4'>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                     alt=''
                  />
               </div>
            </div>
            <div class='grid gap-4'>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
                     alt=''
                  />
               </div>
            </div>
            <div class='grid gap-4'>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <img
                     class='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
                     alt=''
                  />
               </div>
            </div> */}
         </div>
      </section>
   );
}

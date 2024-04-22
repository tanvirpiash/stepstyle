import ProductCard from './product_card';

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
         <div class='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
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
                              <ProductCard productDetails={inner} />
                           </div>
                        );
                     })}
                  </div>
               );
            })}
         </div>
      </section>
   );
}

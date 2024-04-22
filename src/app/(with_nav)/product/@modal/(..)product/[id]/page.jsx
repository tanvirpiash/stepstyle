import ProductDetails from './_components/product_details';
export const generateMetadata = ({ params }) => {
   return {
      title: `Product - ${params.id}`,
   };
};
export default function ProductSinglePage() {
   return <ProductDetails />;
}

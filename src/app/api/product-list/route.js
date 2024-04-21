import { promises as fs } from 'fs';
export async function GET() {
   const productList = await fs.readFile(
      process.cwd() + '/public/products.json',
      'utf8'
   );
   const products = JSON.parse(productList);
   return Response.json(products);
}

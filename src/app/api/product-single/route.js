import { promises as fs } from 'fs';
export async function GET(request) {
   try {
      const url = new URL(request.url);
      const searchParams = new URLSearchParams(url.searchParams);
      const id = searchParams.get('id');
      const productList = await fs.readFile(
         process.cwd() + '/public/products.json',
         'utf8'
      );
      const products = JSON.parse(productList);
      const productSingle = products.find((item) => item.id == id);
      return Response.json(productSingle);
   } catch (error) {
      return Response.error();
   }
}

import dynamic from 'next/dynamic';

const MainLayout = dynamic(() => import('./_components/main_layout'), {
   ssr: false,
});
export default function WithNavLayout({ children }) {
   return <MainLayout>{children}</MainLayout>;
}

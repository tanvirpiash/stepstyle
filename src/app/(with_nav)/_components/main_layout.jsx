'use client';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiPackage } from 'react-icons/bi';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { PiUserListBold } from 'react-icons/pi';
import { BsBag } from 'react-icons/bs';
const menuItem = {
   admin: [
      { url: '/', text: 'Dashboard', icon: <MdSpaceDashboard /> },
      { url: '/product', text: 'Product', icon: <BsBag /> },
      { url: '/profile', text: 'Profile', icon: <CgProfile /> },
      { url: '/users-list', text: 'Users List', icon: <PiUserListBold /> },
   ],
   user: [
      { url: '/', text: 'Dashboard', icon: <MdSpaceDashboard /> },
      { url: '/product', text: 'Product', icon: <BsBag /> },
      { url: '/profile', text: 'Profile', icon: <CgProfile /> },
   ],
};
export default function MainLayout({ children }) {
   const type = Cookies.get('type');
   const pathname = usePathname();
   const [isCollapsed, setCollapse] = useState(true);
   return (
      <div className='grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] h-screen overflow-hidden'>
         <div className='hidden border-r-transparent bg-white md:block'>
            <div className='flex h-full max-h-screen flex-col gap-2'>
               <div className='flex items-center px-4 h-[60px] lg:px-6 bg-gray-600 text-white '>
                  <Link
                     href='/'
                     className='flex items-center gap-2 font-semibold'
                  >
                     <BiPackage className='h-6 w-6' />
                     <span className=''>Demo</span>
                  </Link>
               </div>
               <div className='flex-1 '>
                  <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                     {menuItem[type]?.map((e, index) => {
                        return (
                           <Link
                              key={`menu-item-${typeof e}-${index}`}
                              href={e.url}
                              className={`${
                                 pathname == e.url ? 'text-blue-700 ' : ''
                              } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all`}
                           >
                              {e.icon}
                              {e.text}
                           </Link>
                        );
                     })}
                  </nav>
               </div>
            </div>
         </div>
         <div className='md:max-w-[calc(100vw-220px)] overflow-hidden'>
            <header className='md:h-[60px] flex items-center justify-between md:justify-end gap-4 px-4 lg:px-6 md:bg-gray-600'>
               <nav className='w-full bg-[#ffffff] rounded-md h-auto md:hidden block relative'>
                  <div className='flex items-center justify-between py-[10px] px-[20px]'>
                     <Link href={'/'}>
                        <BiPackage className='h-6 w-6' color='black' />
                        <span className=''>Demo</span>
                     </Link>
                     <button
                        onClick={() => {
                           setCollapse(!isCollapsed);
                        }}
                     >
                        {isCollapsed ? (
                           <AiOutlineMenu size={56 / 2} color='black' />
                        ) : (
                           <AiOutlineClose size={56 / 2} color='black' />
                        )}
                     </button>
                  </div>
                  <ul
                     className={`flex flex-col rounded-md transition-all ease-in-out duration-300 gap-1 absolute bg-white z-10 w-full overflow-hidden ${
                        isCollapsed ? 'h-0' : 'h-auto'
                     }`}
                  >
                     {menuItem[type]?.map((e, index) => {
                        return (
                           <li key={`menu-item-${typeof e}-${index}`}>
                              <Link
                                 className={`px-4 py-2 flex items-center justify-start ${
                                    pathname == e.url ? 'text-blue-500' : ''
                                 }`}
                                 href={e.url}
                              >
                                 {e.text}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
            </header>
            <main className='container p-4 max-h-[calc(100vh-60px)] overflow-y-auto'>
               {children}
            </main>
         </div>
      </div>
   );
}

import { promises as fs } from 'fs';
import { cookies } from 'next/headers';
export const metadata = {
   title: 'Profile',
};
async function getUserInfo() {
   const userEmail = cookies().get('email').value;
   const userList = await fs.readFile(
      process.cwd() + '/public/auth.json',
      'utf8'
   );
   const { admin, user } = JSON.parse(userList);
   let allUser = [];
   admin.forEach((element) => {
      allUser.push({
         email: element.email,
         type: 'admin',
      });
   });
   user.forEach((element) => {
      allUser.push({
         email: element.email,
         type: 'user',
      });
   });
   const userInfo = allUser.find((e) => e.email === `${userEmail}`);
   return userInfo;
}
export default async function ProfilePage() {
   const userInfo = await getUserInfo();
   return (
      <div className='bg-white overflow-hidden shadow rounded-lg shadow-sm'>
         <div className='px-4 py-5 sm:px-6'>
            <h3 className='text-lg leading-6 font-semibold text-gray-700'>
               User Profile
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
               This is some information about the user.
            </p>
         </div>
         <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
            <dl className='sm:divide-y sm:divide-gray-200'>
               <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                     Full name
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                     John Doe
                  </dd>
               </div>
               <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                     Email address
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                     {userInfo.email}
                  </dd>
               </div>
               <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                     Phone number
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                     Lorem, ipsum dolor.
                  </dd>
               </div>
               <div className='py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Address</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                     Lorem, ipsum dolor.
                     <br />
                     Lorem, ipsum.
                  </dd>
               </div>
            </dl>
         </div>
      </div>
   );
}

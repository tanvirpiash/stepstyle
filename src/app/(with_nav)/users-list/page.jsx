import { promises as fs } from 'fs';
async function getUserList() {
   const userList = await fs.readFile(
      process.cwd() + '/public/auth.json',
      'utf8'
   );
   const { admin, user } = JSON.parse(userList);
   let allUser = [];
   let sl = 0;
   admin.forEach((element) => {
      sl++;
      allUser.push({
         sl,
         username: element.email,
         email: element.email,
         type: 'admin',
      });
   });
   user.forEach((element) => {
      sl++;
      allUser.push({
         sl,
         username: element.email,
         email: element.email,
         type: 'user',
      });
   });
   return allUser;
}
export default async function UserListPage() {
   const userList = await getUserList();
   return (
      <div className='relative overflow-x-auto'>
         <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
               <tr className=''>
                  <th scope='col' className='px-6 py-3 rounded-tl-md'>
                     sl
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     username
                  </th>
                  <th scope='col' className='px-6 py-3'>
                     email
                  </th>
                  <th scope='col' className='px-6 py-3 rounded-tr-md'>
                     Type
                  </th>
               </tr>
            </thead>
            <tbody>
               {userList.map((e, index) => {
                  return (
                     <tr
                        key={`user-list-${typeof e}-${index}`}
                        className='bg-white'
                     >
                        <td
                           className={`px-6 py-4 ${
                              index + 1 == userList.length
                                 ? 'rounded-bl-md'
                                 : ''
                           }`}
                        >
                           {e.sl}
                        </td>
                        <td className='px-6 py-4'>{e.username}</td>
                        <td className='px-6 py-4'>{e.email}</td>
                        <td
                           className={`px-6 py-4 ${
                              index + 1 == userList.length
                                 ? 'rounded-br-md'
                                 : ''
                           }`}
                        >
                           {e.type}
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}

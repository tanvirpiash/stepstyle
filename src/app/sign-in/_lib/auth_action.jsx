'use server';
import { promises as fs } from 'fs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function auth(formState, formData) {
   try {
      const userCred = {
         email: formData.get('email'),
         password: formData.get('password'),
      };
      const userList = await fs.readFile(
         process.cwd() + '/public/auth.json',
         'utf8'
      );
      const { admin, user } = JSON.parse(userList);
      const isAdmin = admin.some(
         (user) =>
            user.email == userCred.email && user.password == userCred.password
      );
      const isUser = user.some(
         (user) =>
            user.email == userCred.email && user.password == userCred.password
      );
      if (isAdmin) {
         cookies().set('type', 'admin');
         cookies().set('email', userCred.email);
      } else if (isUser) {
         cookies().set('type', 'user');
         cookies().set('email', userCred.email);
      } else {
         return { message: 'invalid username/password' };
      }
   } catch (error) {
      console.log(error);
   }
   redirect('/');
}

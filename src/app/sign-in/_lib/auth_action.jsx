'use server';
import { promises as fs } from 'fs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function auth(formState, formData) {
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
         user.username == userCred.email && user.password == userCred.password
   );
   const isUser = user.some(
      (user) =>
         user.username == userCred.email && user.password == userCred.password
   );
   if (isAdmin) {
      cookies().set('type', 'admin');
      redirect('/');
   }
   if (isUser) {
      cookies().set('type', 'user');
      redirect('/');
   }
   return {
      message: 'Wrong credentials Invalid Email or Password',
   };
}

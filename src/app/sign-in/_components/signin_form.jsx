'use client';
import auth from '../_lib/auth_action';
import { useFormState, useFormStatus } from 'react-dom';
const SubmitButton = ({ label, loading }) => {
   const { pending } = useFormStatus();
   return (
      <button
         disabled={pending}
         type='submit'
         className='transition-all ease-in-out duration-300 rounded-md bg-black text-white shadow-sm py-2 hover:cursor-pointer disabled:cursor-not-allowed text-sm hover:bg-gray-700'
      >
         {pending ? loading : label}
      </button>
   );
};
export default function SignInForm() {
   const [formState, action] = useFormState(auth, {
      message: '',
   });
   return (
      <form className='grid gap-6' action={action}>
         <fieldset className='grid gap-1'>
            <label
               htmlFor='email'
               className='text-sm font-medium text-gray-700'
            >
               Email
            </label>
            <input
               id='email'
               name='email'
               type='email'
               placeholder='me@example.com'
               required
               className='py-2 px-3 text-sm rounded-md bg-white border-gray-300 focus:outline-2 focus:outline-gray-600 placeholder:text-sm placeholder:font-light placeholder:text-gray-300 text-gray-700 font-light'
            />
         </fieldset>
         <fieldset className='grid gap-1'>
            <label
               htmlFor='password'
               className='text-sm font-medium text-gray-700'
            >
               Password
            </label>
            <input
               id='password'
               type='password'
               name='password'
               placeholder='password'
               required
               className='py-2 px-3 text-sm rounded-md bg-white border-gray-300 focus:outline-2 focus:outline-gray-600 placeholder:text-sm placeholder:font-light placeholder:text-gray-300 text-gray-700 font-light'
            />
         </fieldset>
         <SubmitButton label='Login' loading='Authenticating ...' />
         <span className='text-red-500 text-sm font-normal flex items-center justify-center'>
            {formState.message}
         </span>
      </form>
   );
}

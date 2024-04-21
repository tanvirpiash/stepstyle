'use client';
import auth from '../_lib/auth_action';
import { useFormState, useFormStatus } from 'react-dom';
const SubmitButton = ({ label, loading }) => {
   const { pending } = useFormStatus();
   return (
      <button disabled={pending} type='submit' className='border-2'>
         {pending ? loading : label}
      </button>
   );
};
export default function SignInForm() {
   const [formState, action] = useFormState(auth, {
      message: '',
   });
   return (
      <form className='grid gap-4' action={action}>
         <fieldset className='grid gap-2'>
            <label htmlFor='email'>Email</label>
            <input
               id='email'
               name='email'
               type='email'
               placeholder='m@example.com'
               required
            />
         </fieldset>
         <fieldset className='grid gap-2'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' name='password' required />
         </fieldset>
         <SubmitButton label='Login' loading='Authenticating ...' />
         {formState.message}
      </form>
   );
}

import Image from 'next/image';
import SignInForm from './_components/signin_form';

export default function SignInPage() {
   return (
      <div className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
         <div className='flex items-center justify-center py-12'>
            <div className='mx-auto grid w-[350px] gap-6'>
               <div className='grid gap-2 text-center'>
                  <h1 className='text-3xl font-bold'>Login</h1>
                  <p className='text-balance text-muted-foreground'>
                     Enter your email below to login to your account
                  </p>
               </div>
               <SignInForm />
               {/* <form className='grid gap-4' action={loginUser}>
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
                     <input
                        id='password'
                        type='password'
                        name='password'
                        required
                     />
                  </fieldset>
                  <button type='submit' className='w-full'>
                     Login
                  </button>
               </form> */}
            </div>
         </div>
         <div className='hidden bg-muted lg:block'>
            <Image
               src='/placeholder.svg'
               alt='Image'
               width='1920'
               height='1080'
               className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
            />
         </div>
      </div>
   );
}

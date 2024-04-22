import SignInForm from './_components/signin_form';
export const metadata = {
   title: 'Sign In',
};
export default function SignInPage() {
   return (
      <>
         <main className='flex items-center justify-center py-12 bg-white h-screen overflow-hidden'>
            <div className='mx-auto grid w-[350px] gap-4 border-0 border-gray-300 sm:border rounded-md px-5 py-7 sm:shadow-sm'>
               <div className='grid gap-2 text-center'>
                  <h1 className='text-3xl font-bold'>Login</h1>
                  <p className='text-balance text-md font-light'>
                     Enter your email and password below to login to your
                     account
                  </p>
               </div>
               <SignInForm />
            </div>
         </main>
      </>
   );
}

import { GeistSans } from 'geist/font/sans';
import './globals.css';
import 'react-responsive-modal/styles.css';

export const metadata = {
   title: {
      template: '%s | StepStyle Oasis',
      default: 'StepStyle Oasis',
   },
   description: 'Step into a world where every steps matter',
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={`${GeistSans.className} antialiased bg-gray-200`}>
            {children}
         </body>
      </html>
   );
}

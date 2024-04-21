import React from 'react';

export default function ProductLayout({ children, modal }) {
   return (
      <>
         {children}
         {modal}
      </>
   );
}

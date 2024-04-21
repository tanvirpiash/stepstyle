'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { IoIosClose } from 'react-icons/io';
export default function RouteModal({ children }) {
   const router = useRouter();
   const [open, setOpen] = useState(true);
   return (
      <>
         <Modal
            open={open}
            onClose={() => {
               setOpen(false);
               router.back();
            }}
            closeIcon={<IoIosClose size={32} />}
            center
            classNames={{
               modal: 'rounded-md',
            }}
         >
            {children}
         </Modal>
      </>
   );
}

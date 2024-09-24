"use client"

import { motion } from "framer-motion"
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";


const Contact = () => {
  return (
    <motion.section
     id='contact' 
     className='sm:w-[35rem] w-full scroll-mt-28'
     initial={{
      opacity: 0,
      y:100,
    }}
    whileInView={{
      opacity: 1,
      y:0,
    }}
    transition={{
      duration: 0.5,
      delay: 0.3,
    }}
    viewport={{
      once: true,
    }}
    >
       <h2 className='heading2'>Contact</h2>
       <p className='text-gray-500 mb-5 p-2 -mt-5 text-center'>Contact directly at {" "}
        <a 
         href="mailto:ahmaram172777@gmail.com"
         className='font-bold '
         >
         ahmaram172777@gmail.com
        </a> {" "}
        or use this form.</p>
       <form
         className='flex flex-col  gap-2'
         action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
       >
        <input
         type="email"
         name="senderEmail" 
         placeholder='Email Here'
         required
         maxLength={500}
         className='h-14 px-4 rounded-lg borderBlack'
        //  className='w-full h-10 p-2 rounded-md borderBlack '
        />
        <textarea 
         name="message"
         placeholder='Message Here'
         required
         maxLength={5000}
         rows={10}
         className='p-4 rounded-lg borderBlack'
        //  className='w-full h-52 p-2 rounded-md borderBlack '
        />
        <SubmitBtn/>
       </form>
    </motion.section>
  )
}

export default Contact
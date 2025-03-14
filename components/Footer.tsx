"use client"

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.p
     initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 0.5,
      delay: 0.5,
    }}
    viewport={{
      once: true,
    }} className='text-center mt-5 -mb-5 text-sm text-gray-500 font-semibold'>&copy; 2025 Ahmar Saeed. All rights reserved.
    </motion.p>
  )
}

export default Footer
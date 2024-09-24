"use client"

import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
}

const skills = () => {
  return (
    <section
      id="skills"
      className=' max-w-[53rem] scroll-mt-28 text-center '
    >
    <motion.h2 
      className='heading2'
      initial={{ y:100, opacity:0 }}
      whileInView={{ y:0, opacity:1 }}
      transition={{ delay: 0.03 }}
      viewport={{ once: true }}
    >
      Skills
    </motion.h2>

    <ul className='flex  justify-center flex-wrap gap-2 text-lg font-semibold text-gray-800'>
     {skillsData.map(( skill, index) => (
      <motion.li 
      className='bg-white rounded-xl px-5 py-3 border border-black/[0.1] shadow-slate-700  shadow-sm'
       key={index}
       variants={fadeInAnimationVariants}
       custom={index}
       initial="initial"
       whileInView="animate"
       viewport={{
        once: true,
       }}
      >
        {skill}
      </motion.li>
    ))}
    </ul>
    </section> 
    
  )
}

export default skills
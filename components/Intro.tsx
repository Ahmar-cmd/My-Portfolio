"use client"

import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import Link from "next/link"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"

const Intro = () => {
  return (
   <section className="mt-10 sm:mt-0">
      <motion.h1
        className="mb-5 m-auto px-4 text-center text-2xl sm:text-4xl font-normal !leading-[1.5] md:w-[75%] lg:w-[58%] "
        initial={{ y :100, opacity: 0 }}
        animate={{ y :0, opacity: 1 }}
      >
        <span className="font-extrabold text-5xl sm:text-7xl">Hello, I&apos;m Ahmar.</span> <br /> A passionate{" "}
        <span className="font-bold">front-end developer</span> who enjoys
        building responsive and interactive websites.
      </motion.h1>

       <motion.div 
         className="flex flex-col sm:flex-row items-center justify-center gap-2 px-2 sm:text-lg text-base font-medium "
         initial={{ y :100, opacity: 0 }}
         animate={{ y :0, opacity: 1 }}
         transition={{
            delay: 0.1,
         }}
        >

        <Link 
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 cursor-pointer transition"
        >
          Contact me here{""}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>

        <a 
         href="/React_Front-end_Ahmar.pdf"
         target="_blank" 
         rel="noopener noreferrer"
         className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 cursor-pointer borderBlack transition"
        >
         Download CV{" "}
         <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>

        <div className="flex gap-2 items-center justify-center p-2">
        <a
          href="https://www.linkedin.com/in/ahmar-saeed-a447b2316/"
          aria-label="Linkedin"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
        >
            <BsLinkedin />
        </a>

        <a
          href="https://github.com/Ahmar-cmd"
          aria-label="Github"
          target="_blank"
          className="text-[1.35rem]  bg-white p-[14px] text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
        >
        <FaGithubSquare />
        </a>
        </div>
            
       </motion.div>

   </section>
  )
}

export default Intro
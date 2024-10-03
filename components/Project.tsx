"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

type projectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, siteLink, codeLink }: projectProps) => {
  return (
    <motion.div 
    initial={{ scale: 0.2, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once : true }}
    transition={{
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    }}
     className="flex flex-col-reverse xl:flex-row gap-0 sm:gap-2 w-full borderBlack shadow-lg shadow-gray-900/35 bg-zinc-100 rounded-xl min-h-[300px]">
      
      <div className={`flex flex-col gap-3 sm:gap-6 p-4 md:p-6 xl:w-[55%] w-full`}>
        <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
        <ReactMarkdown className="text-gray-600">{description}</ReactMarkdown>
        <h2 className="font-bold text-lg md:text-xl text-center">Tech Used</h2>
        <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 md:gap-x-5 md:gap-y-3">
          {tags.map((tag, index) => (
            <li
              className="sm:w-32 w-[108px] h-8 text-center bg-white text-gray-700 font-semibold py-1 px-3 md:px-4 md:py-1 rounded-full text-sm md:text-base"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center justify-center flex-wrap">
          <a
            href={siteLink}
            target="_blank"
            className="group flex items-center gap-1  bg-black text-white sm:text-base text-sm px-4 py-2 rounded-lg  transition duration-200 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          >
            Visit Site{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </a>
          <a
            href={codeLink}
            target="_blank"
            className="group flex items-center gap-1  bg-gray-200 text-gray-800 sm:text-base text-sm px-4 py-2  rounded-lg hover:bg-gray-300 transition duration-200 outline-none focus:scale-110 hover:scale-110  active:scale-105"
          >
            Code{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>

      <div className={`w-full xl:w-[45%] flex items-center justify-center`}>
        <Image
          src={imageUrl}
          alt="project_image"
          layout="responsive"
          priority
          className="max-w-full h-auto object-contain xl:rounded-md"
        />
      </div>

    </motion.div>
    // </section>
  );
};
export default Project;

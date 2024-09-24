"use client";

import { projectsData } from "@/lib/data";
import Project from "@/components/Project";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-28 flex flex-col gap-6 p-4 lg:max-w-[75%] xl:max-w-[80%] max-w-full"
    >
      <motion.h2
        className="heading2"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.03 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project}/>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;

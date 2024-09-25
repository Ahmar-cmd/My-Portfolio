"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className=" max-w-[45rem] text-center leading-8  scroll-mt-[170px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="heading2">About Me</h2>

      <p className="font-normal">
        I&apos;m Ahmar, a <span className="font-medium">front end web developer</span>{" "} with a knack for building responsive, 
        user-friendly interfaces. With a solid foundation in technologies like <span className="font-medium">HTML, CSS, JavaScript,
        TypeScript</span> and expertise with popular frameworks and libraries like <span className="font-medium">React, Next.js, TailwindCSS</span>  etc. I craft modern
          websites that are both functional and visually appealing. I excell in creating <span className="font-medium">responsive and seamless websites.</span>
          <br />
          <br />
          I also enjoy working with libraries like <span className="font-medium">MUI, shadcn</span>{" "} and specialize in adding intuitive animations and dynamic effects, using tools like <span className="font-medium">Framer Motion</span>{" "} while easily adapting to any design 
          or component library to enhance user experiences.
        I&apos;m always eager to explore new technologies and thrive on learning how to make web applications more
         efficient and engaging. With experience in <span className="font-medium">MongoDB and Appwrite</span>, I can integrate robust back-end solutions
          into front-end projects seamlessly.
      </p>
    </motion.section>
  );
};

export default About;

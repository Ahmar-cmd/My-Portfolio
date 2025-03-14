import React from "react";
import carepulse from "@/public/carepulse.png";
import Threads from "@/public/Threads.png";
import Blogspot from "@/public/Blogspot.png";
import GoldsGym from "@/public/GoldsGym.png";
import Promptopia from "@/public/Promptopia.png";
import Portfolio from "@/public/Portfolio.png";
import Pestico from "@/public/Pestico.png"
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { FaCss3 } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGit } from "react-icons/fa6";
import { SiShadcnui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FiFramer } from "react-icons/fi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "",
//     location: "",
//     description:
//       "",
//     icon: React.createElement(LuGraduationCap),
//     date: "",
//   },
//   {
//     title: "",
//     location: "",
//     description:
//       "",
//     icon: React.createElement(CgWorkAlt),
//     date: "",
//   },
//   {
//     title: "",
//     location: "",
//     description:
//       "",
//     icon: React.createElement(FaReact),
//     date: "",
//   },
// ] as const;

export const projectsData = [
  {
    title: "CarePulse",
    description:
      "**CarePulse** is a fully **responsive** full-stack healthcare management web application for patient registration, appointment scheduling, and medical record management. Built with **Next.js**, **React** and **typescript** for server-side rendering, routing, and a component-based UI. Utilized **Tailwind CSS** for modern, responsive design across all devices. Implemented **Appwrite** for database operations and file storage. Integrated shadcn for consistent design patterns and form validation using **Zod** schemas. Added SMS notification capabilities for appointment reminders and updates via **Twilio**, and used **Sentry** for real-time error tracking and management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Appwrite","Shadcn"],
    siteLink: "https://care-pulse-henna.vercel.app/",
    codeLink: "https://github.com/Ahmar-cmd/CarePulse",
    imageUrl: carepulse,
  },
  {
    title: "Threads",
    description:
      "**Threads** is a community-driven discussion platform inspired by the original Threads website crafted with **Next.js**, **React** and **typescript**, serving as a platform for creating and interacting with threads in a social setting. Key features include user profile management, community browsing, and threaded discussions. It features a nested comment functionality that allows users to comment on threads and reply to each other's comments. Implemented **Tailwind CSS** for **responsive** styling across all devices. Utilized **MongoDB** for data storage and **Mongoose** for schema definition. Integrated **Clerk** for authentication services. Employed **Zod** for type validation. Developed modular architecture with separate components for authentication, root pages, and API routes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk"],
    siteLink: "https://threads-ten-teal.vercel.app/",
    codeLink: "https://github.com/Ahmar-cmd/Threads",
    imageUrl: Threads,
  },
  {
    title: "Blogspot",
    description:
      "**Blogspot** is a fully **responsive** full-stack **React** application designed as a dynamic blogging platform with comprehensive **CRUD** functionality. Users can register, log in, and manage their posts seamlessly. The platform features a responsive design, with an adaptive header displaying menu items based on authentication status.  Key pages such as Home, Login, Signup, Post Management, and Post Creation are managed via **React Router DOM** for smooth navigation. State management is powered by **Redux**, form handling is streamlined with **React Hook Form**, and **Tailwind CSS** ensures a modern, responsive UI. The backend is supported by **Appwrite (BaaS)** for authentication and data storage.",
    tags: ["React", "Redux", "React-Router", "React Form", "Tailwind CSS", "Appwrite"],
    siteLink: "https://blog-spot-pearl.vercel.app/",
    codeLink: "https://github.com/Ahmar-cmd/BlogSpot",
    imageUrl: Blogspot,
  },
  {
    title: "Promptopia",
    description:
    "**Promptopia** is a full-stack **responsive** community platform for sharing and discovering AI prompts, enabling users to collaboratively explore and exchange ideas for various AI systems. Created using **Next.js** for server-side rendering and **React** for dynamic UI components. The platform supports full **CRUD** functionality, allowing users to create, update, and manage AI prompts. Integrated **NextAuth** with **Google Provider** for seamless OAuth authentication, ensuring secure and frictionless user login and sign-up experiences. Utilized **MongoDB** with **Mongoose** for efficient data management and retrieval, while leveraging **Tailwind CSS** for modern styling and a fully responsive design.",
    tags: ["Next.js", "Tailwind CSS", "NextAuth", "MongoDB"],
    siteLink: "https://promptopia-gray-six.vercel.app/",
    codeLink: "https://github.com/Ahmar-cmd/Promptopia",
    imageUrl: Promptopia,
  },
  {
    title: "Pestico",
    description:
    "**Pestico** is a **Next.js** web application designed to showcase pest control service. Built with **TypeScript** and **Tailwind CSS**, it features detailed company information and a fully functional contact form powered by **Resend**. The site is responsive, SEO-optimized, and mobile-friendly, ensuring a seamless user experience. With a focus on accessibility and modern web development practices, Pestico demonstrates expertise in Next.js, frontend performance, and search engine optimization (SEO).",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    siteLink: "https://pestico.vercel.app/",
    codeLink: "https://github.com/Ahmar-cmd/Pestico",
    imageUrl: Pestico,
  },
  {
    title: "Golds Gym",
    description:
      "**Goldsgym** is a comprehensive web application built using **React** for fitness enthusiasts and is **responsive** from smaller to bigger screens. The platform showcases a vast range of exercises and, when an exercise is selected, provides similar exercises, including those using the same equipment. Integrated YouTube API to recommend relevant video content for a deeper understanding of each workout. Leveraged **Material-UI** for responsive design and **React Router DOM** for smooth navigation. Optimized API calls and data-fetching strategies to ensure high performance, demonstrating expertise in modern frontend development and API integration.",
    tags: ["React", "MUI", "React-Router"],
    siteLink: "https://golds-gym-gamma.vercel.app/",
    codeLink: "https://github.com/Ahmar-cmd/Golds-Gym",
    imageUrl: GoldsGym,
  },
  {
    title: "Portfolio",
    description:
      "My **portfolio** is an utterly **responsive** website crafted using **Next.js**, **React**, and **TypeScript** to effectively showcase my projects, skills, and professional journey. Leveraged **Tailwind CSS** for responsive, modern styling and **Framer Motion** for fluid animations, creating an engaging and visually appealing user experience. Implemented server-side rendering with Next.js for optimal performance, enhanced SEO, and fast load times. Integrated a fully functional contact form with server-side validation, utilizing **Resend** to craft beautifully styled emails, ensuring professional communication and data security. This portfolio highlights my technical expertise in front-end development, while demonstrating creative problem-solving and attention to detail in delivering polished user experiences.",
    tags: ["Next.js","Typescript", "Tailwind CSS", "Framer"],
    siteLink: "https://my-portfolio-pearl-rho-54.vercel.app/",
    codeLink: "https://github.com/Ahmar-cmd/My-Portfolio",
    imageUrl: Portfolio,
  },
] as const;


export const skillsData = [
  {
    name: "Javascript",
    icon: React.createElement(RiJavascriptFill),
  },
  {
    name: "Typescript",
    icon: React.createElement(SiTypescript),
  },
  {
    name: "React",
    icon: React.createElement(FaReact),
  },
  {
    name: "Next.JS",
    icon: React.createElement(SiNextdotjs),
  },
  {
    name: "Tailwind CSS",
    icon: React.createElement(BiLogoTailwindCss),
  },
  {
    name: "Appwrite",
    icon: React.createElement(SiAppwrite),
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb),
  },
  {
    name: "React Router",
    icon: React.createElement(SiReactrouter),
  },
  {
    name: "Redux",
    icon: React.createElement(SiRedux),
  },
  {
    name: "Git",
    icon: React.createElement(FaGit),
  },
  {
    name: "Shadcn",
    icon: React.createElement(SiShadcnui),
  },
  {
    name: "MUI",
    icon: React.createElement(SiMui),
  },
  {
    name: "HTML5",
    icon: React.createElement(DiHtml5),
  },
  {
    name: "CSS3",
    icon: React.createElement(FaCss3),
  },
  {
    name: "Framer Motion",
    icon: React.createElement(FiFramer),
  },
] as const;
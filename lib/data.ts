import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carepulse from "@/public/carepulse.png";
import Threads from "@/public/Threads.png";
import Blogspot from "@/public/Blogspot.png";
import GoldsGym from "@/public/GoldsGym.png";
import Promptopia from "@/public/Promptopia.png";
import Portfolio from "@/public/Portfolio.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
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
    tags: ["Next.js", "React", "TailwindCSS","TypeScript", "Appwrite","Shadcn"],
    imageUrl: carepulse,
  },
  {
    title: "Threads",
    description:
      "**Threads** is a community-driven discussion platform inspired by the original Threads website crafted with **Next.js**, **React** and **typescript**, serving as a platform for creating and interacting with threads in a social setting. Key features include user profile management, community browsing, and threaded discussions. It features a nested comment functionality that allows users to comment on threads and reply to each other's comments. Implemented **Tailwind CSS** for **responsive** styling across all devices. Utilized **MongoDB** for data storage and **Mongoose** for schema definition. Integrated **Clerk** for authentication services. Employed **Zod** for type validation. Developed modular architecture with separate components for authentication, root pages, and API routes.",
    tags: ["Next.js","React", "TypeScript", "TailwindCSS", "MongoDB", "Clerk"],
    imageUrl: Threads,
  },
  {
    title: "Blogspot",
    description:
      "**Blogspot** is a full-stack **React** application, offering a dynamic blogging platform where users can register, log in, and manage and share posts with full **CRUD** functionality for authors. The site includes a header with adaptive menu items based on user authentication. Key pages include home, login, signup, all posts, and new post creation. **Redux** handles state management, **React Hook Form** simplifies form handling, and **Tailwind CSS** is used for modern, responsive styling. The backend is powered by **Appwrite (BaaS)** for user authentication and data storage.",
    tags: ["React","Tailwind CSS", "React-Router","Redux", "Appwrite"],
    imageUrl: Blogspot,
  },
  {
    title: "Promptopia",
    description:
    "**Promptopia** is a full-stack **responsive** community platform for sharing and discovering AI prompts, enabling users to collaboratively explore and exchange ideas for various AI systems. Created using **Next.js** for server-side rendering and **React** for dynamic UI components. The platform supports full **CRUD** functionality, allowing users to create, update, and manage AI prompts. Integrated **NextAuth** with **Google Provider** for seamless OAuth authentication, ensuring secure and frictionless user login and sign-up experiences. Utilized **MongoDB** with **Mongoose** for efficient data management and retrieval, while leveraging **Tailwind CSS** modern styling and for a fully responsive design.",
    tags: ["Next.js", "React", "Tailwind CSS", "NextAuth", "MongoDB"],
    imageUrl: Promptopia,
  },
  {
    title: "Golds Gym",
    description:
      "**Goldsgym** is a comprehensive web application built using **React** for fitness enthusiasts and is **responsive** from smaller to bigger screens. The platform showcases a vast range of exercises and, when an exercise is selected, provides similar exercises, including those using the same equipment. Integrated YouTube API to recommend relevant video content for a deeper understanding of each workout. Leveraged **Material-UI** for responsive design and **React Router DOM** for smooth navigation. Optimized API calls and data-fetching strategies to ensure high performance, demonstrating expertise in modern frontend development and API integration.",
    tags: ["React","Javascript", "MUI", "React-Router"],
    imageUrl: GoldsGym,
  },
  {
    title: "Portfolio",
    description:
      "My **portfolio** is an utterly **responsive** website crafted using **Next.js**, **React**, and **TypeScript** to effectively showcase my projects, skills, and professional journey. Leveraged **Tailwind CSS** for responsive, modern styling and **Framer Motion** for fluid animations, creating an engaging and visually appealing user experience. Implemented server-side rendering with Next.js for optimal performance, enhanced SEO, and fast load times. Integrated a fully functional contact form with server-side validation, utilizing **Resend** to craft beautifully styled emails, ensuring professional communication and data security. This portfolio highlights my technical expertise in front-end development, while demonstrating creative problem-solving and attention to detail in delivering polished user experiences.",
    tags: ["Next.js", "React","Typescript", "Tailwind CSS", "Framer"],
    imageUrl: Portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "React Router",
  "Next.js",
  "Git",
  "TailwindCSS",
  "shadcn",
  "MUI",
  "Appwrite",
  "MongoDB",
  "Framer Motion",
] as const;
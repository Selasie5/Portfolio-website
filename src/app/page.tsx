"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const [statusMessage, setStatusMessage] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const getCurrentStatusMessage = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();

      if (hours >= 0 && hours <= 3) {
        return "Currently trying to get enough rest 😴";
      } else if (hours >= 4 && hours < 6) {
        return "Waking up and getting ready for the day 🌅";
      } else if (hours >= 6 && hours < 14) {
        return "I am getting some code written 💻";
      } else if (hours >= 14 && hours < 17) {
        return "I am in meetings or learning more about software engineering 📚";
      } else if ((hours >= 17 && hours < 19) && (day !== 3 && day !== 5)) {
        return "Wrapping up some feature build or spending time with family and friends 🏡";
      } else if ((hours >= 17 && hours < 19) && (day === 3)) {
        return "Reviewing pull requests 📝";
      } else if ((hours >= 17 && hours < 19) && (day === 5)) {
        return "Pushing to production 🚀";
      } else if (hours >= 19 && hours < 21) {
        return "Listening to a sermon or watching a movie 🎬";
      } else if (hours >= 21) {
        return "Going to bed 🛌";
      } else {
        return "I am currently busy being awesome";
      }
    };

    setStatusMessage(getCurrentStatusMessage());
  }, []);

  return (
    <motion.section
      className="h-screen flex flex-col items-start justify-center space-y-3"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex items-center justify-center px-3 py-2 gap-x-2 bg-white/10 rounded-full"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
        <span className="text-white font-Sans text-sm">{statusMessage}</span>
      </motion.div>
      <motion.h3
        className="text-2xl md:text-3xl font-normal font-Sans text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi👋! I am Selasie Sepenu
      </motion.h3>
      <motion.h1
        className=" text-[3.2rem] md:text-6xl font-Sans text-bold text-white md:w-4/5 leading-tight"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        A software engineer <span className="font-extrabold">building user-centric software</span> based in Accra, Ghana.
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-4 py-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="border border-gray-200 px-5 py-2 rounded-full font-Poppins text-sm text-white hover:bg-white hover:text-black hover:font-bold hover:cursor-pointer transition-colors">
          #Team Work
        </div>
        <div className="border border-gray-200 px-5 py-2 rounded-full font-Poppins text-sm text-white hover:bg-white hover:text-black hover:font-bold hover:cursor-pointer transition-colors">
          #Time Management
        </div>
        <div className="border border-gray-200 px-5 py-2 rounded-full font-Poppins text-sm text-white hover:bg-white hover:text-black hover:font-bold hover:cursor-pointer transition-colors">
          #Problem-solving
        </div>
        <div className="border border-gray-200 px-5 py-2 rounded-full font-Poppins text-sm text-white hover:bg-white hover:text-black hover:font-bold hover:cursor-pointer transition-colors">
          #Critical Thinking
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row items-center justify-center gap-x-4 py-2 w-full md:w-0"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button className="bg-purple-500/20 rounded-lg px-5 py-3 w-full md:w-0 text-white font-Plus text-md font-medium hover:bg-purple-500">
          <Link href="" className="flex items-center justify-center gap-x-2">
            <FaFilePdf className="text-lg" />
            Download My Resume
          </Link>
        </button>
        <button className="bg-green-500/20 rounded-lg px-5 py-3 w-full md:w-0 text-white font-Plus text-md font-medium hover:bg-green-500">
          <Link href="" className="flex items-center justify-center gap-x-2">
            <FaGithub className="text-lg" />
            View My Github
          </Link>
        </button>
      </motion.div>
      
    </motion.section>
  );
}

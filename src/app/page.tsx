"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub,FaLinkedin,FaFilePdf, FaInstagram,FaWhatsapp } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TechStackCard from "./TechStackCard";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { 
  SiTypescript ,
   SiNextdotjs,
   SiNodedotjs,
   SiExpress,
   SiMongodb,
   SiPostgresql,
   SiPrisma,
   SiFirebase,
   SiJest
  } from "react-icons/si";




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
        return "I am  learning more about software engineering 📚";
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
    <section className="space-y-64  scroll-snap-y-mandatory scroll-snap-start">
    <motion.section
      className="h-screen flex flex-col items-start justify-center space-y-3 snap-start"
      // ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity:  1  }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex items-center justify-center px-3 py-2 gap-x-2 bg-white/10 rounded-full"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y:  0, opacity: 1  }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
        <span className="text-white font-Sans text-sm">{statusMessage}</span>
      </motion.div>
      <motion.h3
        className="text-2xl md:text-3xl font-normal font-Sans text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y:  0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi👋! I am Selasie Sepenu
      </motion.h3>
      <motion.h1
        className=" text-[3.2rem] md:text-6xl font-Sans text-bold text-white md:w-4/5 leading-tight"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y:  0 , opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        A software engineer <span className="font-extrabold">building user-centric software</span> based in Accra, Ghana.
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-4 py-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y:  0, opacity:  1 }}
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
        className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row items-center justify-center gap-x-4 py-2 w-full md:w-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y:  0, opacity:  1  }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button className="bg-purple-500/20 rounded-lg px-5 py-3 w-full md:w-auto  text-white font-Plus text-md font-medium hover:bg-purple-500">
          <Link href="" className="flex items-center justify-center gap-x-2">
            <FaFilePdf className="text-lg" />
            Download My Resume
          </Link>
        </button>
        <button className="bg-green-500/20 rounded-lg px-5 py-3 w-full md:w-auto text-white font-Plus text-md font-medium hover:bg-green-500">
          <Link href="" className="flex items-center justify-center gap-x-2">
            <FaGithub className="text-lg" />
            View My Github
          </Link>
        </button>
      </motion.div>
    </motion.section>

    {/* About Me Details Section */}
    <motion.section
    ref={sectionRef} 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="flex flex-col justify-center items-start group snap-start"
    >
      <motion.div className="flex flex-row justify-center items-center gap-x-4">
        <span className="text-lg font-Sans font-light tracking-wider text-white/80">01</span>
        <hr className="h-1 w-10 outline-none "></hr>
        <h3 className="text-md font-light text-white/50 font-Plus tracking-wide">JUST A LITTLE MORE ABOUT ME</h3>
        </motion.div>
        <motion.div className="py-10 flex flex-col md:flex-row items-center justify-start gap-x-10  gap-y-10 md:gap-y-0">
          <Image src="/Profile-Img.jpg" alt="" width={350} height={200} className="rounded-xl grayscale group-hover:grayscale-0"/>
          <motion.div className="flex flex-col justify-center item-start gap-y-6">
           
          <p className="text-white font-light font-Plus  text-xl md:text-lg md:w-4/5 leading-normal">I&apos;m a software engineer with a passion for creating dynamic, user-centric web applications. With a strong background in JavaScript, TypeScript, Tailwind CSS, and Next.js, I thrive on bringing innovative ideas to life and solving complex problems with elegant code. I have close to 2 years of professional experience in the industry, working on a variety of exciting projects that have honed my skills and fueled my enthusiasm for software development especially frontend.I have dabbled my feet in the cloud a bit which lead to me attaining the     {" "} 
          <span className="text-green-500 underline">
            AWS Cloud Practitioner
          </span>
            {" "}  certification.  I am eager to learn new things and apply them readily.  Oh and I&apos;m a big fan of all things related to  music especially contemporary gospel music.   
          </p>
          <div className="flex justify-start items-center gap-x-4">
              <Link href="">
              <FaLinkedin className="text-xl text-white hover:text-green-50"/>
              </Link>
              <Link href="">
              <FaInstagram className="text-xl text-white hover:text-green-50"/>      
                </Link>
              <Link href="">
              <FaWhatsapp  className="text-xl text-white hover:text-green-50"/>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section>
      <motion.div className="flex flex-col justify-center items-start gap-x-4">
        <motion.div className="flex flex-row justify-start items-center gap-x-4">
        <span className="text-lg font-Sans font-light tracking-wider text-white/80">02</span>
        <hr className="h-1 w-10 outline-none "></hr>
        <h3 className=" text-4xl md:text-5xl font-bold text-white/80 font-Plus tracking-wide">My Tech Stack</h3>
        </motion.div>
        <p className="text-white font-light text-md py-2 font-Poppins">My expertise lies in a robust and modern tech stack, enabling me to create high-quality, scalable, and performant web applications.</p>
    <motion.div className="flex flex-wrap md:w-[85%] items-start justify-start gap-y-7 md:gap-y-10  gap-x-2 md:gap-x-8 mt-4">
      <TechStackCard icon={FaHtml5} language="HTML 5" domain="frontend"/>
      <TechStackCard icon={FaCss3Alt} language="CSS 3" domain="frontend"/>
      <TechStackCard icon={FaJsSquare} language="Javascript" domain=""/>
      <TechStackCard icon={FaReact} language="React" domain="frontend"/>
      <TechStackCard icon={SiTypescript} language="Typescript" domain=""/>
      <TechStackCard icon={ SiNextdotjs} language="Next JS" domain=""/>
      <TechStackCard icon={ SiNodedotjs } language="Node JS" domain="backend"/>
      <TechStackCard icon={SiExpress} language="Express JS" domain="backend"/>
      <TechStackCard icon={ SiMongodb } language="Mongo DB" domain="database"/>
      <TechStackCard icon={  SiPostgresql  } language="PostgreSQL" domain="database"/>
      <TechStackCard icon={ SiPrisma  } language="Prisma" domain="database"/>
      <TechStackCard icon={ SiFirebase } language="Firebase" domain="backend"/>
      <TechStackCard icon={  SiJest } language="Jest" domain="testing"/>
    </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram, FaWhatsapp,FaSquareXTwitter } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TechStackCard from "./components/TechStackCard";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiJest,
  SiFigma
} from "react-icons/si";
import WorkExperienceCard from "./components/WorkExperienceCard";
import ProjectCard from "./components/ProjectCard";
import SocialConnect from "./components/SocialConnect";
import Loader from "./components/Loader"; // Import the Loader component

export default function Home() {
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(true); // State to manage loader visibility
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
        return "I am learning more about software engineering 📚";
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

    // Hide loader after 7 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="scroll-snap-y-mandatory scroll-snap-start">
      {loading && <Loader />} {/* Show loader if loading is true */}
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
          <Link href="https://docs.google.com/document/d/1LCWEKlWDYSGduEfb9-0VGN_X24Wc_6xK7F_AMPgOFL8/edit?usp=sharing"  className="flex items-center justify-center gap-x-2">
            <FaFilePdf className="text-lg" />
            Take A Look At My Resume
          </Link>
        </button>
        <button className="bg-green-500/20 rounded-lg px-5 py-3 w-full md:w-auto text-white font-Plus text-md font-medium hover:bg-green-500">
          <Link href="https://github.com/Selasie5" className="flex items-center justify-center gap-x-2">
            <FaGithub className="text-lg" />
            View My Github
          </Link>
        </button>
      </motion.div>
    </motion.section>

    {/* About Me Details Section */}
    <motion.section
    className="flex flex-col justify-center items-start group snap-start my-24"
    >
      <motion.div className="flex flex-row justify-center items-center gap-x-4">
        <span className="text-lg font-Sans font-light tracking-wider text-white/80">01</span>
        <hr className="h-1 w-10 outline-none "></hr>
        <h3 className="text-4xl md:text-5xl font-medium text-white/80 font-Sans tracking-wide">About Me</h3>
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
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section  className=" my-24">
      <motion.div className="flex flex-col justify-center items-start gap-x-4">
        <motion.div className="flex flex-row justify-start items-center gap-x-4">
        <span className="text-lg font-Sans font-light tracking-wider text-white/80">02</span>
        <hr className="h-1 w-10 outline-none "></hr>
        <h3 className="text-4xl md:text-5xl font-medium text-white/80 font-Sans tracking-wide">My Tech Stack</h3>
        </motion.div>
        <p className="text-white font-light text-md py-2 font-Poppins">My expertise lies in a robust and modern tech stack, enabling me to create high-quality, scalable, and performant web applications.</p>
    <motion.div className="flex flex-wrap md:w-[85%] items-start justify-start gap-y-7 md:gap-y-10  gap-x-2 md:gap-x-8 mt-4">
      <TechStackCard icon={FaHtml5} language="HTML 5" domain="frontend"/>
      <TechStackCard icon={FaCss3Alt} language="CSS 3" domain="frontend"/>
      <TechStackCard icon={FaJsSquare} language="Javascript" domain=""/>
      <TechStackCard icon={FaReact} language="React" domain="frontend"/>
      <TechStackCard icon={SiTypescript} language="Typescript" domain=""/>
      <TechStackCard icon={ SiNextdotjs} language="Next JS" domain=""/>
      <TechStackCard icon={  SiTailwindcss} language="Tailwind CSS" domain=""/>
      <TechStackCard icon={ SiNodedotjs } language="Node JS" domain="backend"/>
      <TechStackCard icon={SiExpress} language="Express JS" domain="backend"/>
      <TechStackCard icon={ SiMongodb } language="Mongo DB" domain="database"/>
      <TechStackCard icon={  SiPostgresql  } language="PostgreSQL" domain="database"/>
      <TechStackCard icon={ SiPrisma  } language="Prisma" domain="database"/>
      <TechStackCard icon={ SiFirebase } language="Firebase" domain="backend"/>
      <TechStackCard icon={  SiJest } language="Jest" domain="testing"/>
      <TechStackCard icon={  SiFigma } language="Figma" domain="frontend"/>
    </motion.div>
        </motion.div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section  className=" my-24">
        <motion.div className="flex flex-col justify-center items-start gap-y-16">
      <motion.div className="flex flex-row justify-start items-center gap-x-4">
        <span className="text-lg font-Sans font-light tracking-wider text-white/80">03</span>
        <hr className="h-1 w-10 outline-none "></hr>
        <h3 className="text-4xl md:text-5xl font-medium text-white/80 font-Sans tracking-wide">Work Experience</h3>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-start py-4 gap-20">
        <WorkExperienceCard startDate="Jul 2024" endDate="Present" company="Hedstarter AI"  role="Software Engineering Fellow" valuePresentedAtCompany1="Performed major product design changes that are instrumental in successfully delivering a product consumers love" valuePresentedAtCompany2="Built, deployed and documented an API that automates MailChimp audience subscription on our waitlist site." valuePresentedAtCompany3="Reviewed initial backend infrastructure and planned redesign to suit product requirements while enhancing optimization and efficiency." techStack1="Next JS" techStack2="AWS" techStack3="Open AI API" techStack4="Stripe"/>
        <WorkExperienceCard startDate="May 2024" endDate="Present" company="Afrovivo"  role="Software Engineer" valuePresentedAtCompany1="Performed major product design changes that are instrumental in successfully delivering a product consumers love" valuePresentedAtCompany2="Built, deployed and documented an API that automates MailChimp audience subscription on our waitlist site." valuePresentedAtCompany3="Reviewed initial backend infrastructure and planned redesign to suit product requirements while enhancing optimization and efficiency." techStack1="Figma" techStack2="Node JS" techStack3="Express JS" techStack4="Postman"/>
        <WorkExperienceCard startDate="Apr 2023" endDate="May 2024" company="LeadMonger"  role="Frontend Engineer" valuePresentedAtCompany1="Worked extensively and closely with a team of designers to develop visually appealing and highly responsive websites and web apps for clients." valuePresentedAtCompany2="Conducted basic user experience research, considered feedback, and implemented it to enhance user experience on all platforms I built." valuePresentedAtCompany3="Develop websites and web apps that meet the expectations of clients in both visuals aesthetics and functionality." techStack1="Figma" techStack2="Wordpress" techStack3="HTML" techStack4="CSS"/>
        <WorkExperienceCard startDate="Aug 2023" endDate="Sep 2023" company="Andela Learning Community"  role="Frontend Engineer Trainee" valuePresentedAtCompany1="I was engaged in intense and extensive collaboration with both new and experienced devs to learn and work with the REACT JS library and Next JS framework." valuePresentedAtCompany2="I interacted with a community of learners and technical mentors, completed assessments, and various tasks." valuePresentedAtCompany3="Built an event ticketing system as a final project" techStack1="React JS" techStack2="Next JS" techStack3="React Native" techStack4="Typescript "/>
        <WorkExperienceCard startDate="Jun 2023" endDate="Aug 2023" company="ALX Africa(Uptech Syndicate)"  role="UI/UX Designer" valuePresentedAtCompany1="I was the visual designer and slide deck master for my team. Hence, I gained extensive experience working on my presentation skills" valuePresentedAtCompany2="After weeks of brainstorming and ideation, my team came up with a technological solution to help the problem of increasing food prices in the African continent as a whole and Ghana especially.I developed the wireframes and prototypes for the mobile which aim to solve our identified problem" valuePresentedAtCompany3="Constantly worked with data from user experience research to iterate and improve the design and functionality of the solution" techStack1="Figma" techStack2="Miro" techStack3="Google Slides" techStack4="User Experience Research"/>
        </motion.div>
        </motion.div>
        </motion.section>

        {/* Project Section */}
        <motion.section  className="py-10  my-24">
          <motion.div 
          className="flex flex-col jusitfy-center items-start ">
          <motion.div  className="flex flex-row justify-start items-center gap-x-4">
        <span className="text-lg font-Sans font-light tracking-wider text-white/80">04</span>
        <hr className="h-1 w-10 outline-none "></hr>
        <h3 className="text-4xl md:text-5xl font-medium text-white/80 font-Sans tracking-wide">Recent Projects</h3>
        </motion.div>
        <p className="text-white font-light text-md py-2 font-Poppins">During my free time, I build some projects to continuously improve my software engineering skills.</p>
        <motion.div
        // initial={{ y: -20, opacity: 0 }}
        // animate={{ y: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
        // transition={{ duration: 0.5, delay: 0.9}}
         className="grid  md:grid-cols-2 place-items-center gap-10 mt-5">
          <ProjectCard title="Mailchimp Connect API"  overview ="This API was built to connect the waitlist form on a website to mailchimp, so transactional or marketing email sending can be easily done." githubLink="" liveLink="" techStack={["NodeJS", "Express JS","Typescript","Heroku","Mailchimp API"]} bgColor="bg-purple-500" hoverBgColor="hover:bg-purple-500/50"/>
          <ProjectCard title="Notify"  overview ="This is a fullstack web-application with authentication and CRUD feature that enables people to take notes , pin them and effectively filter them based on category" githubLink="" liveLink="" techStack={["React JS", "Tailwind CSS","Node JS","Express JS","MongoDB","Render"]} bgColor="bg-green-500" hoverBgColor="hover:bg-green-500/50"/>
          <ProjectCard title="Droply"  overview ="This API was built to connect the waitlist form on a website to mailchimp, so transactional or marketing email sending can be easily done." githubLink="" liveLink="" techStack={["Next JS","Tailwind CSS", "Typescript","Firebase","Render"]} bgColor="bg-blue-500" hoverBgColor="hover:bg-blue-500/50"/>
          <ProjectCard title="ElastiSearch"  overview="This is a fullstack web application that leverages the high-performace searching ability of PostgreSQL to model a search engine for a database seeded with jacket data " githubLink="" liveLink="" techStack={["Next JS","Tailwind CSS", "Typescript","Neon","PostgreSQL","Drizzle ORM","Render"]} bgColor="bg-emerald-500" hoverBgColor="hover:bg-emerald-500/50"/>
        </motion.div>
          </motion.div>
        </motion.section>

        <motion.section className="flex  flex-col md:flex-row items-center justify-center gap-20  rounded-3xl  my-24">
          <div className=" w-full md:w-1/2 flex flex-col justify-center items-start gap-7">
          <h5 className="font-Sans text-6xl font-medium text-white">Let&apos;s Connect🧋</h5>
          <h2 className="text-white font-normal font-Plus text-lg">I&apos;m always eager to connect with fellow professionals. discuss new opportunities and collaborate on exciting projects. Whether you have a question or just want to say a hello, feel free to reach out.</h2>
          <div className="flex flex-row justify-center items-center gap-5">
            <SocialConnect icon={FaLinkedin} socialLink="https://www.linkedin.com/in/selasiekofisepenu/"/>
            <SocialConnect icon={FaInstagram} socialLink="https://www.instagram.com/dev_selasie/"/>
            <SocialConnect icon={FaSquareXTwitter} socialLink="https://x.com/SelasiSepenu"/>
            <SocialConnect icon={MdMarkEmailUnread} socialLink="selasisepenu5@gmail.com"/>
            <SocialConnect icon={FaWhatsapp} socialLink=""/>
          </div>
          <button className="bg-purple-500/20 text-white font-Sans font-bold text-md tracking-normal px-5 py-[0.9rem] rounded-xl hover:bg-green-300 hover:text-green-900">
            <Link href="https://calendly.com/selasisepenu5/let-s-connect">
              Schedule A Meeting
            </Link>
          </button>
          </div>
          <div className="md:w-1/2">
          <Image src="/connect-img.jpg" alt="" width={600} height={300} className="rounded-3xl"/>
            </div>
        </motion.section>

        <motion.section className="flex flex-row justify-between items-center pb-6">
          <div className="flex flex-row jsutify-center items-center gap-3">
            <hr className="w-12"/>
          <h3 className="text-white font-Plus text-lg font-bold">Dr_Seps</h3>
          </div>
        <h3 className="text-white font-Sans text-md">&copy; Selasie Sepenu 2024</h3>
        </motion.section>
    </section>
  );
}

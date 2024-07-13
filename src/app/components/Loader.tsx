"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = ["Hey there,", "You Are ", "Welcome To ", "My Portfolio"];

const Loader = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 1000); // Change message every  2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-purple-500 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 1 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'} // Re-enable scroll after animation
    >
      <motion.div
        className="text-white text-4xl md:text-6xl font-Sans tracking-wider font-bold"
        key={currentMessage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {messages[currentMessage]}
       
      </motion.div>
    </motion.div>
  );
};

export default Loader;

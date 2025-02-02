"use client";
import React from "react";
import style from "@/style/component/About.module.scss";
import aboutData from "@/app/(data)/about_data";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

function AboutTitle() {
  let pageCount = useSelector((state) => state.slider.value);
  const animation = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div className={style.aboutTitle}>
      <motion.h2
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.4 }}
        variants={animation}
        className= {prompt.className}
      >
        {aboutData[pageCount].title}
      </motion.h2>

      <motion.p
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.4 }}
        variants={animation}
      >
        {aboutData[pageCount].content}
      </motion.p>
    </div>
  );
}

export default AboutTitle;

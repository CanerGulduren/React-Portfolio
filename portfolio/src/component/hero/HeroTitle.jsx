import React from "react";
import style from "../../style/component/Hero.module.scss";
import {motion} from "framer-motion"
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});


function HeroTitle() {
  return (
      <div className={style.mainTitle}>
        <motion.div
        initial={{x: 60, opacity: 0}}
        animate={{x:0 ,opacity: 1 }}
        transition={{duration: .4}}
        className= {prompt.className}
        >
          <h1>Caner</h1>
          <h1>Güldüren</h1>
        </motion.div>
        <motion.p 
        className={style.authorTitle}
        initial={{y: 60, opacity: 0}}
        animate={{y:0 ,opacity: 1 }}
        transition={{duration: .3, delay: .2}}
        >
          Hi there! I'm a Frontend Developer with a knack for crafting beautiful and responsive websites that leave a lasting impression.
        </motion.p>
      </div>
  );
}

export default HeroTitle;

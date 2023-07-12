import React from "react";
import style from "../../style/component/Hero.module.scss";
import {motion} from "framer-motion"

/*const prompt = Prompt({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});
*/

function HeroTitle() {
  return (
      <div className={style.mainTitle}>
        <motion.div
        initial={{x: 60, opacity: 0}}
        animate={{x:0 ,opacity: 1 }}
        transition={{duration: .4}}
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
          I'm a Front-End Developer with a passion for design and obsession for perfection.
        </motion.p>
      </div>
  );
}

export default HeroTitle;

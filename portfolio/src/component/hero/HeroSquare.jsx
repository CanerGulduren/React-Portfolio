import React from "react";
import style from "@/style/component/Hero.module.scss";
import heroImg from "../../../public/heroImg.png";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSquare() {
  return (
    <motion.div
    className= {style.heroSquare}
      initial= {{ scale: 0.7, opacity: 0 }}
      animate= {{scale: 1, opacity: 1}}
      transition= {{
        duration: .4,
        delay: .3,
      }}
    >
      <motion.div
      className= {style.imgWrapper}
      initial= {{y: 50, x: 50, opacity: 0}}
      animate= {{y: 0, x: 0, opacity: 1}}
      transition= {{
        duration: .6,
        delay: .6,
      }}
      >
      <Image
        key={"heroTitleImg"}
        src={heroImg}
        className={style.heroImg}
        alt="author"
        />
        </motion.div>
    </motion.div>
  );
}

export default HeroSquare;

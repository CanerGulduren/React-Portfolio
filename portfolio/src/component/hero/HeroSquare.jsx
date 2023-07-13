import React from "react";
import style from "@/style/component/Hero.module.scss";
import heroImg from "../../../public/caner.png";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSquare() {
  return (
    <div className= {style.heroSquare} >
      <motion.div
      className= {style.imgWrapper}
      initial= {{scale: 0, opacity: 0}}
      animate= {{scale: 1, opacity: 1}}
      transition= {{
        duration: .4,
        delay: .4,
      }}
      >
      <Image
        key={"heroTitleImg"}
        src={heroImg}
        className={style.heroImg}
        alt="author"
        />
        </motion.div>
    </div>
  );
}

export default HeroSquare;

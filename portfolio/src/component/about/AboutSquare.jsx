"use client";
import React from "react";
import aboutData from "@/app/(data)/about_data";
import { useSelector } from "react-redux";
import SkillItem from "./SkillItem";
import style from "@/style/component/About.module.scss"
import {motion} from "framer-motion"

function AboutSquare() {
  let pageCount = useSelector(state => state.slider.value)
  return (
    <motion.div
    key={"about"}
    className= {style.container}
    initial= {{opacity: 0, rotate: 45}}
    animate= {{opacity: 1, rotate: 0}}
    transition= {{duration: 1,}}

    >
  <motion.div className= {style.skillContainer}>
    <SkillItem skillData={aboutData[pageCount].square} />
  </motion.div>
  <motion.div 
  className={style.squareTop}
  initial={{rotateX: -90, y: 100}}
  animate={{rotateX: 0, y: 0}}
  transition={{duration: .6}}>
    top
  </motion.div>
  <motion.div className={style.squareBottom}
    initial={{rotateX: 90, y: -100}}
    animate={{rotateX: 0, y: 0}}
    transition={{duration: .6}}>
      bottom
    </motion.div>
    </motion.div>
    

  )
}




export default AboutSquare;

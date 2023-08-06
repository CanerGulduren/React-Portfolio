import React from "react";
import {motion} from "framer-motion"
import style from "@/style/component/Projects.module.scss";

function ImageSlider({sliderImg, styleName, description}) {
  return (
    <motion.div 
    key={sliderImg}
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    className= {styleName}>
    <img
    className= {style.mainImg}
    src={sliderImg}
    alt={description}
    />
    </motion.div>
  )
}

export default ImageSlider
import React from 'react'
import { motion } from "framer-motion";
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai";
import style from "@/style/component/Projects.module.scss"

function SwitchScreen({styleName, isMobile, handleState}) {
  return (
    <motion.div 
    initial= {{scale: 0, opacity: 0}}
    animate= {{scale: 1, opacity: 1}}
    transition= {{
      duration: .2,
    }}
    className={styleName}>
        <button
          onClick={() => {
            if (!isMobile) return;
            {handleState()};
          }}
          className={`${!isMobile ? style.activeBtn : ""}`}
        >
          <AiOutlineDesktop style={{fontSize: "1.1rem"}} />
          <span>Desktop</span>
        </button>
        <button
          onClick={() => {
            if (isMobile) return;
            {handleState()};
          }}
          className={`${isMobile ? style.activeBtn : ""}`}
        >
          <AiOutlineMobile style={{fontSize: "1.1rem"}} />
          <span>Mobile</span>
        </button>
      </motion.div>
  )
}

export default SwitchScreen
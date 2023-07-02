import React from 'react'
import style from "@/style/component/About.module.scss";
import {motion} from "framer-motion"

function MultipleSkillItem({skillData}){
    return(
      skillData.map((item) => {
          return(
            <motion.div 
            className= {style.skillItems} 
            key={item.key}
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit={{opacity: 0}}
            transition = {{delay: .5}}
            >
              <span>{item.component}</span>
              <p>{item.name}</p>
            </motion.div>
          )
      }
      )
      )
  }

export default MultipleSkillItem
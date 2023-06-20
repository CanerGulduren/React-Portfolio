import React from 'react'
import style from "@/style/component/About.module.scss";

function SkillItem({skillData}){
    return(
      skillData.map((item) => {
          return(
            <div className= {style.skillItems} key={item.key}>
              {item.component}
              <p>{item.name}</p>
            </div>
          )
      }
      )
      )
  }

export default SkillItem
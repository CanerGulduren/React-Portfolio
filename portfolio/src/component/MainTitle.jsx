import React from 'react'
import style from "@/style/component/Main.module.scss"

function MainTitle({children}) {
  return (
    <div className= {style.mainTitle}>
      {children}
    </div>
  )
}

export default MainTitle
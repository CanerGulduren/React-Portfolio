import React from 'react'
import style from "@/style/component/Main.module.scss"

function Circle({children}) {
  return (
    <div className ={style.circle}>
      {children}
    </div>
  )
} 

export default Circle
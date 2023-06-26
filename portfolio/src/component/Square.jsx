"use client"
import React from 'react'
import style from "@/style/component/Main.module.scss"

function Square({children}) {


  return (
    <div className ={style.mainContent}>
      <div className= {style.square}>
      {children}
      </div>
    </div>
  )
} 

export default Square
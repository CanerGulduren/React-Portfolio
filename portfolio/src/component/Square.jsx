"use client"
import React from 'react'
import style from "@/style/component/Main.module.scss"

function Square({children}) {


  return (
    <div className ={style.mainContent}>
      {children}
    </div>
  )
} 

export default Square
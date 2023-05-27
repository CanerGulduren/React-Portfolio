"use client"
import {React, useState} from 'react'
import Image from "next/image"

function Loading() {
    const [load, setLoad] = useState(false) 
  return (
    <div>
        <Image src={"hero.jpg"} alt='hero' onClick={setLoad(true)}/>
        <Image src={"hero.jpg"} alt='hero' onClick={setLoad(true)}/>
        <Image src={"hero.jpg"} alt='hero' onClick={setLoad(true)}/>
        <Image src={"hero.jpg"} alt='hero' onClick={setLoad(true)}/>
    </div>
  )
}

export default Loading
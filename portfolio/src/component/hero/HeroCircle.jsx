import React from 'react'
import style from "@/style/component/Hero.module.scss"
import heroImg from "../../../public/hero.jpg"
import Image from 'next/image'

function HeroCircle() {
  return (
    <Image 
    src={heroImg}
    className= {style.heroImg}
    alt='author'
    />
  )
}

export default HeroCircle
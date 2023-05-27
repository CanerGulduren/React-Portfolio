import React from 'react'
import Image from "next/image"
import hero_img from "../../public/hero.jpg"
import style from "../../style/component/Hero.module.scss"

function Hero() {
  return (
    <section className= {style.container}>
       <Image 
        src = {hero_img}
        alt= 'Person'
        className= {style.main_img}
        />
           
        <div className= {style.main_title}>
        <h1>
          Hi, I am Caner.
        </h1>
        <span>
          I'm a Front-End Developer.
        </span>
      </div>
    </section>
  )
}

export default Hero
"use client"
import React from 'react'
import MainTitle from '@/component/MainTitle'
import style from "@/style/component/Main.module.scss"
import { useSelector } from "react-redux";
import Links from '@/component/Links'
import Navbar from '@/component/navbar'
import Slider from "@/component/slider/Slider"
import Square from '@/component/Square'
import mainPage from "@/app/(data)/main_data"

function Page() {
  const pageCount = useSelector((state) => state.globalMainData.count);
  
  let TitleComponent = mainPage[pageCount].title
  let PageComponent = mainPage[pageCount].square
  let isSliderVisible = mainPage[pageCount].sliderVisible
  
  return (
    <div className= {style.container}>
      <Navbar />

      <MainTitle>
       < TitleComponent/>
      </MainTitle>
       <Links />

      <Square>
      < PageComponent/>
      { isSliderVisible && <Slider styleName={style.mainContentSlider} /> }
      </Square>  

      { isSliderVisible && <Slider styleName={style.fullPageSlider} />}

    </div>
  )
}

export default Page
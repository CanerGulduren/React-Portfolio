"use client"
import React from 'react'
import MainTitle from '@/component/MainTitle'
import style from "@/style/component/Main.module.scss"
import { useSelector } from "react-redux";
import Links from '@/component/Links'
import Navbar from '@/component/navbar'
import SliderBtn from '@/component/SliderBtn'
import Square from '@/component/Square'

function Page() {
  const mainData = useSelector((state) => state.globalMainData.value)
  const pageCount = useSelector((state) => state.globalMainData.count);
  
  let TitleComponent = mainData[pageCount].title
  let PageComponent = mainData[pageCount].square
  let isSliderVisible = mainData[pageCount].sliderVisible
  
  return (
    <div className= {style.container}>
      <Navbar />

      <MainTitle>
       < TitleComponent/>
       <Links />
      </MainTitle>

      <Square>
      < PageComponent/>
      </Square>  

      { isSliderVisible && <SliderBtn />}

    </div>
  )
}

export default Page
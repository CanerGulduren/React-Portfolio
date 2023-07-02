"use client"
import React from 'react'
import style from "@/style/component/Main.module.scss"
import { useSelector ,useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/features/sliderSlice'

function SliderBtn() {
    const dispatch = useDispatch()
    const mainData = useSelector(state => state.globalMainData.value)
    let sliderCount = useSelector(state => state.slider.value)
    let currentCount = useSelector(state => state.globalMainData.count)

    let slideContentLenght = mainData[currentCount].pageCount
  return (
    <div className= {style.sliderBtn}>
    <button onClick={() => {
      if(sliderCount === 0){return}
      dispatch(decrement())
      }}>Left</button>
    <button
    onClick={() => {
      if(sliderCount >= slideContentLenght - 1){return}
      dispatch(increment())
      }}
    >Right</button>
  </div>
  )
}

export default SliderBtn
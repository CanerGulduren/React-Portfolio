import React from 'react'
import style from "@/style/component/OpenWalls.module.scss"
import LeftWall from './LeftWall.jsx'
import RightWall from './RightWall.jsx'
function Walls() {
  return (
    <div className= {style.wallWrapper}>
        <LeftWall />
        <RightWall />
        </div>
  )
}

export default Walls
import React from 'react'
import style from "@/style/component/Projects.module.scss"
import squareStyle from "@/style/component/Main.module.scss"
import { useSelector } from 'react-redux'
import projectData from '@/app/(data)/projects_data'

function ProjectsSquare() {
  let pageCount = useSelector((state) => state.slider.value)
  let desktopImg = projectData[pageCount].desktopImg
  let mobileImg = projectData[pageCount].mobileImg
  let imgTitle = projectData[pageCount].imgTitle
  return (
    <>
        <div>ProjectsSquare
        <img 
        src={desktopImg}
        alt={imgTitle}
        className= {style.squareImg}
        />
        </div>
     <div className= {style.mobileScreen}>
        <img 
        src={mobileImg}
        alt={imgTitle}
        className= {style.squareImg}
        />
      </div>
    </>
  )
}

export default ProjectsSquare
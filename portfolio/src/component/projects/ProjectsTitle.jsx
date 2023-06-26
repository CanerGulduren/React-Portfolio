import React from 'react'
import { useSelector } from 'react-redux'
import projectData from '@/app/(data)/projects_data'

function ProjectsTitle() {
  let pageCount = useSelector((state) => state.slider.value)
  return (
    <div>
      <h3>{projectData[pageCount].title}</h3>
      <p>{projectData[pageCount].description}</p>
    </div>
  )
}

export default ProjectsTitle
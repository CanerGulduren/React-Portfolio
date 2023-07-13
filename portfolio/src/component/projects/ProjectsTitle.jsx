import React from "react";
import { useSelector } from "react-redux";
import projectData from "@/app/(data)/projects_data";
import style from "@/style/component/Projects.module.scss";
import { Prompt } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const prompt = Prompt({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

function ProjectsTitle() {
  let pageCount = useSelector((state) => state.slider.value);
  return (
    <motion.div 
    initial={{y: 60, opacity: 0}}
    animate={{y:0 ,opacity: 1 }}
    transition={{duration: .3, delay: .2}}
    className={style.projectsTitle}>
      <h3 className={prompt.className}>
        {projectData[pageCount].title}
      </h3>
      <div>
        <div className= {style.projectsDesc}>
        <p>{projectData[pageCount].description1}</p>
        <p>{projectData[pageCount].description2}</p>
        </div>
        <Link href={projectData[pageCount].link} target="_blank" className= {style.linkBtn}>
        {projectData[pageCount].linkTitle}
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsTitle;

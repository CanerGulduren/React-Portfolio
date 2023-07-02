import React, { useState } from "react";
import style from "@/style/component/Projects.module.scss";
import squareStyle from "@/style/component/Main.module.scss";
import { useSelector } from "react-redux";
import projectData from "@/app/(data)/projects_data";
import { useToggle } from "@/hooks/useToggle";
import { motion } from "framer-motion";

function ProjectsSquare() {
  const [mobileScreen, setMobileScreen] = useToggle();
  console.log(mobileScreen);
  let pageCount = useSelector((state) => state.slider.value);
  let desktopImg = projectData[pageCount].desktopImg;
  let mobileImg = projectData[pageCount].mobileImg;
  let imgTitle = projectData[pageCount].imgTitle;
  return (
    <div className={style.container}>
      <div className={style.switchScreen}>
        <button
          onClick={() => {
            if (!mobileScreen) return;
            setMobileScreen();
          }}
        >
          Desktop
        </button>
        <button
          onClick={() => {
            if (mobileScreen) return;
            setMobileScreen();
          }}
        >
          Mobile
        </button>
      </div>

      <motion.div
        className={style.screen}
        transition={{ duration: 0.2 }}
        layout
        data-mobile={mobileScreen ? "true" : "false"}
      >
        <img
          src={mobileScreen ? mobileImg : desktopImg}
          alt={imgTitle}
          className={style.squareImg}
        />
      </motion.div>
    </div>
  );
}

export default ProjectsSquare;

import React from "react";
import style from "@/style/component/Projects.module.scss";
import { useSelector } from "react-redux";
import projectData from "@/app/(data)/projects_data";
import { useToggle } from "@/hooks/useToggle";
import { motion } from "framer-motion";
import SwitchScreen from "./SwitchScreen";
import Image from "next/image";

function ProjectsSquare() {
  const [mobileScreen, setMobileScreen] = useToggle();
  let pageCount = useSelector((state) => state.slider.value);
  let desktopImg = projectData[pageCount].desktopImg;
  let mobileImg = projectData[pageCount].mobileImg;
  let imgTitle = projectData[pageCount].title;
  return (
    <div className={style.container}>

      <SwitchScreen styleName={style.switchScreen} handleState={setMobileScreen} isMobile={mobileScreen} />

      <motion.div
        className={style.screen}
        layout
        data-mobile={mobileScreen ? "true" : "false"}
        initial= {{scale: 0, opacity: 0}}
        animate= {{scale: 1, opacity: 1}}
        transition= {{
          duration: .2,
        }}
      >
        <Image
          src={mobileScreen ? mobileImg : desktopImg}
          alt={imgTitle}
          className={style.squareImg}
          width={800}
          height={800}
        />
      </motion.div>
    </div>
  );
}

export default ProjectsSquare;

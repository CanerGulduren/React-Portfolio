import React from "react";
import style from "@/style/component/Projects.module.scss";
import { useSelector } from "react-redux";
import projectData from "@/app/(data)/projects_data";
import { useToggle } from "@/hooks/useToggle";
import { motion } from "framer-motion";
import SwitchScreen from "./SwitchScreen";
import ImageSlider from "./ImageSlider";

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
        {mobileScreen ? <ImageSlider sliderImg={mobileImg} styleName={style.mobileSlider} description={imgTitle} /> 
      : <ImageSlider sliderImg={desktopImg} styleName={style.desktopSlider} description={imgTitle} /> }
      </motion.div>
    </div>
  );
}

export default ProjectsSquare;

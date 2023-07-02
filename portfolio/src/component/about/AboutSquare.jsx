"use client";
import React from "react";
import aboutData from "@/app/(data)/about_data";
import { useSelector } from "react-redux";
import style from "@/style/component/About.module.scss";
import CustomSquare from "./CustomSquare";
import MultipleSkillItem from "./MultipleSkillItem";
import SingleSkillItem from "./SingleSkillItem";

function AboutSquare() {
  
  let pageCount = useSelector((state) => state.slider.value);
  
  return (
    <div className= {style.container}>
      <CustomSquare 
      content={<MultipleSkillItem skillData={aboutData[pageCount].square} />} 
      squareStyle={style.mainSquare}
      contentStyle={style.mainSkillWrapper}
      />

      <CustomSquare 
      content={<SingleSkillItem item={aboutData[pageCount].sideSquare1} />}
      squareStyle={style.sideSquare1}
      contentStyle={style.sideSkillWrapper}
      />
      
      <CustomSquare 
      content={<SingleSkillItem item={aboutData[pageCount].sideSquare2} />}
      squareStyle={style.sideSquare2}
      contentStyle={style.sideSkillWrapper}
      />
    </div>
  );
}

export default AboutSquare;

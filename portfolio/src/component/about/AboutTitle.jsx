"use client"
import React from "react";
import style from "@/style/component/About.module.scss"
import aboutData from "@/app/(data)/about_data";
import { useSelector } from "react-redux";

function AboutTitle() {
  let pageCount = useSelector((state) => state.slider.value)
  return (
        <div className={style.aboutTitle}>
          <h2>{aboutData[pageCount].title}</h2>
          <p>{aboutData[pageCount].content}</p>
        </div>
  );
}

export default AboutTitle;

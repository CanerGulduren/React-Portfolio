"use client";
import React from "react";
import aboutData from "@/app/(data)/about_data";
import { useSelector } from "react-redux";
import SkillItem from "./SkillItem";

function AboutCircle() {
  let pageCount = useSelector(state => state.slider.value)
  return <SkillItem skillData={aboutData[pageCount].circle} />;
}




export default AboutCircle;

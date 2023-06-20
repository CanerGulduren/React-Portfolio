import React from "react";
import style from "../../style/component/Hero.module.scss";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

function HeroTitle() {
  return (
      <div className={style.mainTitle}>
        <div>
          <h1 className={prompt.className}>Caner</h1>
          <h1 className={prompt.className}>Güldüren</h1>
        </div>
        <p className={style.authorTitle}>
          I'm a Front-End Developer. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
  );
}

export default HeroTitle;

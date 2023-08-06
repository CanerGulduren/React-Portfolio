"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/features/sliderSlice";
import mainPage from "@/app/(data)/main_data";
import { motion } from "framer-motion";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import SlideLine from "./SlideLine";



const activeStyle = {
  div: {
    color: "white",
  },
};
const disableStyle = {
  div: {
    color: "gray",
  },
};


function SliderBtn({ styleName }) {
  const [leftDisable, setLeftDisable] = useState(true);
  const [rightDisable, setRightDisable] = useState(false);
  const dispatch = useDispatch();
  let sliderCount = useSelector((state) => state.slider.value);
  let currentCount = useSelector((state) => state.globalMainData.count);
  let slideContentLenght = mainPage[currentCount].pageCount;



  useEffect(() => {
    setLeftDisable(sliderCount === 0 ? true : false);
    setRightDisable(sliderCount >= slideContentLenght - 1 ? true : false);    
  }, [sliderCount]);

  return (
    <motion.div 
    className={styleName}
    initial= {{opacity: 0}}
    animate= {{scale: [0, 1], opacity: 1}}
    transition= {{
      duration: .3,
      delay: .4
    }}
    >
      <motion.div
        style={leftDisable ? disableStyle.div : activeStyle.div}
        onClick={() => {
          if (sliderCount === 0) {
            return;
          }
          dispatch(decrement());
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 60 }}
      >
        <AiFillLeftSquare />
      </motion.div>

      <SlideLine count={slideContentLenght} activeIndex={sliderCount} />

      <motion.div
        style={rightDisable ? disableStyle.div : activeStyle.div}
        onClick={() => {
          if (sliderCount >= slideContentLenght - 1) {
            return;
          }
          dispatch(increment());
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 60 }}
      >
        <AiFillRightSquare />
      </motion.div>
    </motion.div>
  );
}

export default SliderBtn;

import { configureStore } from "@reduxjs/toolkit";
import menuBtn from "../features/menuBtnSlice";
import pageCount from "../features/pageCount.jsx";
import  slider  from "../features/sliderSlice";
import globalMainData  from "../features/mainDataSlice";

export const store = configureStore(
    {
        reducer: {
            menuBtn: menuBtn,
            pageCount: pageCount,
            slider: slider,
            globalMainData: globalMainData
        }
    }
) 
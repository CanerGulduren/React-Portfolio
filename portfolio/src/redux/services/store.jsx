import { configureStore } from "@reduxjs/toolkit";
import menuBtn from "../features/menuBtnSlice"

export const store = configureStore(
    {
        reducer: {
            menuBtn: menuBtn
        }
    }
) 
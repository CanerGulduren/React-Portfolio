import { createSlice } from "@reduxjs/toolkit";
import mainPage from "@/app/(data)/main_data";

let mainData = [...mainPage]

export const globalMainData = createSlice({
        name: "main data",
        initialState: {value: mainData, count: 0},
        reducers: {
            changePage: (state, action) => {
                state.count = action.payload
            }
        }
    }
)

export const { changePage } = globalMainData.actions;
export default globalMainData.reducer;
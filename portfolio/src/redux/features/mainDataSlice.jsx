import { createSlice } from "@reduxjs/toolkit";


export const globalMainData = createSlice({
        name: "main data",
        initialState: {count: 0},
        reducers: {
            changePage: (state, action) => {
                state.count = action.payload
            }
        }
    }
)

export const { changePage } = globalMainData.actions;
export default globalMainData.reducer;
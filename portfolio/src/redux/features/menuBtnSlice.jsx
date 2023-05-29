import { createSlice } from "@reduxjs/toolkit";

export const menuBtn = createSlice({
        name: "button",
        initialState: {value: false},
        reducers: {
            btnClick: (state, action) => {
                state.value = action.payload
            }
        }
    }
)

export const { btnClick } = menuBtn.actions;
export default menuBtn.reducer;
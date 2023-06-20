import { createSlice } from "@reduxjs/toolkit";

export const slider = createSlice({
        name: "content slider",
        initialState: {value: 0},
        reducers: {
            increment: (state) => {
                state.value++
            },
            decrement: (state) => {
                state.value--
            },
            slideCountByAmount: (state, action) => {
                state.value = action.payload
            }
        }
    }
)

export const { increment, decrement, slideCountByAmount } = slider.actions;
export default slider.reducer;
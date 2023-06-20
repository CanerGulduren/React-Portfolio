import { createSlice } from "@reduxjs/toolkit";

export const pageCount = createSlice({
        name: "page",
        initialState: {value: 0},
        reducers: {
            incrementPageCount: (state, action) => {
                state.value = action.payload
            }
        }
    }
)

export const { incrementPageCount } = pageCount.actions;
export default pageCount.reducer;
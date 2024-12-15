import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        Increment: (state) => {
            state.counter += 1;
        },
        Decrement: (state) => {
            if (state.counter <= 1) {
                state.counter = 1;
            } else {
                state.counter -= 1;
            }
        }
    }
});

export const { Increment, Decrement } = MySlice.actions;
export default MySlice.reducer;

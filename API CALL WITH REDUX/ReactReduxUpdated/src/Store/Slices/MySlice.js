import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        APIDATA:[]
    },
    reducers: {
        UsersData:(state,action)=>{
           state.APIDATA = action.payload;
        }
    }
});

export const { Increment, Decrement, UsersData } = MySlice.actions;
export default MySlice.reducer;

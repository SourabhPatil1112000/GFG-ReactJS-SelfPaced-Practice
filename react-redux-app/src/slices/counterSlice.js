import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.count = state.count + 1 }, // --> 'counter/increment' action trigge
        decrement: state => { state.count = state.count - 1 }  // --> 'counter/decrement' action trigge
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// Reducers are functions that take the current state and an action as
// an argument, and return a new state result. In other words,
// (state, action) =>
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: function (state) {
      state.count++;
    },
    decrement: function (state) {
      state.count--;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;

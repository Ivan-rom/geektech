import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calcSlice",
  initialState: {
    result: "",
  },
  reducers: {
    plus: function (state, action) {
      state.result = +action.payload[0] + +action.payload[1];
    },
    minus: function (state, action) {
      state.result = +action.payload[0] - +action.payload[1];
    },
    times: function (state, action) {
      state.result = +action.payload[0] * +action.payload[1];
    },
    devide: function (state, action) {
      state.result = +action.payload[0] / +action.payload[1];
    },
  },
});

export const { plus, minus, times, devide } = calcSlice.actions;

export default calcSlice.reducer;

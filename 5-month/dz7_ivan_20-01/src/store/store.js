import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photosSlice";
import photoReducer from "./photoSlice";

export const store = configureStore({
  reducer: {
    photosReducer,
    photoReducer,
  },
});

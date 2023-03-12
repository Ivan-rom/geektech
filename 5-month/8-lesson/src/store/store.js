import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import percentReducer from "./percentSlice";
import usersReducer from "./usersSlice";

const reducer = combineReducers({
  countReducer,
  percentReducer,
  usersReducer,
});

const store = configureStore({
  reducer,
});

export default store;

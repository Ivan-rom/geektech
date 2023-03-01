import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  todoReducer,
  titleReducer,
  usersReducer,
});

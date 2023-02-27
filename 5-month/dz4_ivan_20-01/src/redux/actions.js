import { types } from "./types";

export function changeInputAction(value) {
  return {
    type: types.CHANGE_INPUT,
    payload: value,
  };
}

export function addCountAction() {
  return {
    type: types.ADD_COUNT,
  };
}

export function clearAllAction() {
  return {
    type: types.CLEAR_ALL,
  };
}

import { types } from "./types";

export function changeTodoInputAction(value) {
  return {
    type: types.CHANGE_TODO_INPUT,
    payload: value,
  };
}

export function addTodoAction(todo) {
  return {
    type: types.ADD_TODO,
    payload: todo,
  };
}

export function deleteTodoAction(id) {
  return {
    type: types.DELETE_TODO,
    payload: id,
  };
}

export function changeStatusAction(objTodo) {
  return {
    type: types.CHANGE_STATUS,
    payload: objTodo,
  };
}

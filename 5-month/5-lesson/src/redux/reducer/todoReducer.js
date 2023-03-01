import { types } from "../types";

const initialState = {
  todoValue: "",
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TODO_INPUT:
      return { ...state, todoValue: action.payload };

    case types.ADD_TODO:
      let id = 1;
      if (state.todos.length > 0) {
        id = state.todos[state.todos.length - 1].id + 1;
      }

      return {
        ...state,
        todos: [...state.todos, { id, text: action.payload, status: false }],
        todoValue: "",
      };

    case types.DELETE_TODO:
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
      };

    case types.CHANGE_STATUS:
      const newArray = state.todos.map((todo) =>
        +todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
      return {
        ...state,
        todos: newArray,
      };

    default:
      return state;
  }
}

export default todoReducer;

import { types } from "../types";

const initialState = {
  countsList: [],
  inputValue: "",
  prevValue: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT:
      return { ...state, inputValue: action.payload };

    case types.ADD_COUNT:
      const newValue = +state.inputValue + state.prevValue;

      let id = 1;
      if (state.countsList.length > 0) {
        id = state.countsList[state.countsList.length - 1].id + 1;
      }
      return {
        ...state,
        countsList: [...state.countsList, { value: newValue, id }],
        prevValue: newValue,
        inputValue: "",
      };

    case types.CLEAR_ALL:
      return { ...state, countsList: [], inputValue: "", prevValue: 0 };

    default:
      return state;
  }
};

export default reducer;

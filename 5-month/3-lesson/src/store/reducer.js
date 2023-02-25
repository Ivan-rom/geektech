const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCRMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECRMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_COUNTER":
      return { ...state, counter: state.counter + action.value };
    case "REMOVE_COUNTER":
      return { ...state, counter: state.counter - action.value };

    default:
      return state;
  }
};

export default reducer;

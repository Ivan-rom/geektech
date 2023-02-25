const initialState = {
  title: "hello",
  titleTwo: "my name is Ivan",
  // inputValue: "",
  titleAbout: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_TITLE":
      return { ...state, title: "hello geeks" };
    case "CHANGE_TITLE_TWO":
      return { ...state, titleTwo: "I'm a frontender" };
    case "CHANGE_TYPE_WITH_PARAMS":
      return { ...state, title: action.payload };
    case "INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "TITLE_ABOUT":
      return {
        ...state,
        titleAbout: action.payload,
        // inputValue: ""
      };
    case "CLEAR_ABOUT":
      return {
        ...state,
        titleAbout: "",
        // inputValue: ""
      };

    default:
      return state;
  }
}

import { types } from "../types";

const initialState = {
  nameValue: "",
  userNameValue: "",
  eMailValue: "",
  webSiteValue: "",
  isOk: false,
  isShowing: false,
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case types.FORM_SEND:
      return { ...state, ...action.payload };

    case types.NAME_CHANGE:
      return { ...state, nameValue: action.payload };

    case types.USER_NAME_CHANGE:
      return { ...state, userNameValue: action.payload };

    case types.E_MAIL_CHANGE:
      return { ...state, eMailValue: action.payload };

    case types.WEB_SITE_CHANGE:
      return { ...state, webSiteValue: action.payload };

    case types.IS_OK_CHANGE:
      return { ...state, isOk: action.payload };

    case types.IS_SHOWING_CHANGE:
      return { ...state, isShowing: action.payload };

    case types.CLEAR_FORM:
      return {
        ...state,
        nameValue: "",
        userNameValue: "",
        eMailValue: "",
        webSiteValue: "",
      };

    default:
      return state;
  }
}

export default formReducer;

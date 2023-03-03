import { types } from "./types";

export function nameChangeAction(value) {
  return { type: types.NAME_CHANGE, payload: value };
}

export function userNameChangeAction(value) {
  return { type: types.USER_NAME_CHANGE, payload: value };
}

export function eMailChangeAction(value) {
  return { type: types.E_MAIL_CHANGE, payload: value };
}

export function webSiteChangeAction(value) {
  return { type: types.WEB_SITE_CHANGE, payload: value };
}

export function isOkChangeAction(value) {
  return { type: types.IS_OK_CHANGE, payload: value };
}

export function isShowingChangeAction(value) {
  return { type: types.IS_SHOWING_CHANGE, payload: value };
}

export function clearFormAction() {
  return { type: types.CLEAR_FORM };
}

export function sendFormAction(body) {
  return async function (dispatch) {
    const query = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    query
      .then((response) => {
        if (response.ok) {
          dispatch(isOkChangeAction(true));
          dispatch(clearFormAction());
        } else {
          dispatch(isOkChangeAction(false));
        }
        dispatch(isShowingChangeAction(true));
      })
      .catch(() => {
        dispatch(isOkChangeAction(false));
        dispatch(isShowingChangeAction(true));
      });
    query.finally(() => {
      setTimeout(() => {
        dispatch(isShowingChangeAction(false));
      }, 5000);
    });
  };
}

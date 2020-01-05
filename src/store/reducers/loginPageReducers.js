import {
  LOGIN_PAGE_LOGIN_CHANGE,
  LOGIN_PAGE_PASSWORD_CHANGE,
  LOGIN_PAGE_DELETE_LOGIN,
  LOGIN_PAGE_DELETE_PASSWORD
} from "../actions/loginPageAction";

let defaultState = {
  login: "",
  password: ""
};

export const loginPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_PAGE_LOGIN_CHANGE:
      return { ...state, login: action.payload };
    case LOGIN_PAGE_PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_PAGE_DELETE_LOGIN:
      return { ...state, login: action.payload };
    case LOGIN_PAGE_DELETE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

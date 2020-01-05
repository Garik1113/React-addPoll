import {
  SIGNUP_PAGE_NAME_CHANGE,
  SIGNUP_PAGE_SURNAME_CHANGE,
  SIGNUP_PAGE_EMAIL_CHANGE,
  SIGNUP_PAGE_AGE_CHANGE,
  SIGNUP_PAGE_LOGIN_CHANGE,
  SIGNUP_PAGE_PASSWORD_CHANGE,
  SIGNUP_PAGE_DELETE_INFROM
} from "../actions/signupPageAction";

const defaultState = {
  name: "",
  surname: "",
  email: "",
  age: "",
  login: "",
  password: ""
};

export const signupPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGNUP_PAGE_NAME_CHANGE:
      return { ...state, name: action.payload };
    case SIGNUP_PAGE_SURNAME_CHANGE:
      return { ...state, surname: action.payload };
    case SIGNUP_PAGE_EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case SIGNUP_PAGE_AGE_CHANGE:
      return { ...state, age: action.payload };
    case SIGNUP_PAGE_LOGIN_CHANGE:
      return { ...state, login: action.payload };
    case SIGNUP_PAGE_PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case SIGNUP_PAGE_DELETE_INFROM:
      return action.payload;
    default:
      return state;
  }
};

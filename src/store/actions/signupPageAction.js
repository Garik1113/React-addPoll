export const SIGNUP_PAGE_NAME_CHANGE = "SIGNUP_PAGE_NAME_CHANGE";
export const SIGNUP_PAGE_SURNAME_CHANGE = "SIGNUP_PAGE_SURNAME_CHANGE";
export const SIGNUP_PAGE_EMAIL_CHANGE = "SIGNUP_PAGE_EMAIL_CHANGE";
export const SIGNUP_PAGE_AGE_CHANGE = "SIGNUP_PAGE_AGE_CHANGE";
export const SIGNUP_PAGE_LOGIN_CHANGE = "SIGNUP_PAGE_LOGIN_CHANGE";
export const SIGNUP_PAGE_PASSWORD_CHANGE = "SIGNUP_PAGE_PASSWORD_CHANGE";
export const SIGNUP_PAGE_DELETE_INFROM = "SIGNUP_PAGE_DELETE_INFROM";

export const signupPageNameChange = name => {
  return {
    type: SIGNUP_PAGE_NAME_CHANGE,
    payload: name
  };
};

export const signupPageSurnameChange = surname => {
  return {
    type: SIGNUP_PAGE_SURNAME_CHANGE,
    payload: surname
  };
};

export const signupPageEmailChange = email => {
  return {
    type: SIGNUP_PAGE_EMAIL_CHANGE,
    payload: email
  };
};

export const signupPageAgeChange = age => {
  return {
    type: SIGNUP_PAGE_AGE_CHANGE,
    payload: age
  };
};
export const signupPageLoginChange = login => {
  return {
    type: SIGNUP_PAGE_LOGIN_CHANGE,
    payload: login
  };
};

export const signupPagePasswordChange = password => {
  return {
    type: SIGNUP_PAGE_PASSWORD_CHANGE,
    payload: password
  };
};

export const signupPageDeleteInform = () => {
  return {
    type: SIGNUP_PAGE_DELETE_INFROM,
    payload: ""
  };
};

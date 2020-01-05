export const LOGIN_PAGE_LOGIN_CHANGE = "LOGIN_PAGE_LOGIN_CHANGE";
export const LOGIN_PAGE_PASSWORD_CHANGE = "LOGIN_PAGE_PASSWORD_CHANGE";
export const LOGIN_PAGE_DELETE_PASSWORD = "LOGIN_PAGE_DELETE_PASSWORD";
export const LOGIN_PAGE_DELETE_LOGIN = "LOGIN_PAGE_DELETE_LOGIN";
export const loginPageLoginChange = login => {
  return {
    type: LOGIN_PAGE_LOGIN_CHANGE,
    payload: login
  };
};

export const loginPagePasswordChange = password => {
  return {
    type: LOGIN_PAGE_PASSWORD_CHANGE,
    payload: password
  };
};

export const loginPageDeletePassword = empty => {
  return {
    type: LOGIN_PAGE_DELETE_PASSWORD,
    payload: empty
  };
};

export const loginPageDeleteLogin = empty => {
  return {
    type: LOGIN_PAGE_DELETE_LOGIN,
    payload: empty
  };
};

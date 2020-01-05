const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ageValidRegex = /^[1-9]?[0-9]{1}$|^100$/;

export const IsValidEmail = email => {
  return emailValidationRegex.test(String(email).toLowerCase());
};
export const IsValidAge = age => {
  return ageValidRegex.test(age);
};

export const isAllInputsFilled = (...args) => {
  return args.every(input => input !== "");
};

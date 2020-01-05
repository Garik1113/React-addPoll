import { combineReducers } from "redux";
import { loginPageReducer } from "./reducers/loginPageReducers";
import { signupPageReducer } from "./reducers/signupPageReducers";
import {
  adminPageQuestionReducer,
  adminPageAnswerReducer,
  adminPageSavedPolls
} from "./reducers/adminPageReducers";

export default combineReducers({
  loginPage: loginPageReducer,
  signupPage: signupPageReducer,
  adminPageQuestions: adminPageQuestionReducer,
  adminPageAnswers: adminPageAnswerReducer,
  adminPageSavedPolls: adminPageSavedPolls
});

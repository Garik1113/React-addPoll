import {
  ADMIN_PAGE_QUESTION_CHANGE,
  ADMIN_PAGE_ANSWER_CHANGE,
  ADMIN_PAGE_ANSWER_DELETE,
  ADMIN_PAGE_POLLS_SAVE,
  ADMIN_PAGE_POLLS_DELETE,
  ADMIN_PAGE_QUESTION_DELETE
} from "../actions/adminPageAction";

import { POLLS_PAGE_ACTIVATE_POLL } from "../actions/pollsPageAction";
import { PROFILE_PAGE_CLICK_ON_VARIANT } from "../actions/profilePageAction";
const defaultStateForQuestions = [];
const defaultStateForAnswers = [];
export const adminPageQuestionReducer = (
  state = defaultStateForQuestions,
  action
) => {
  switch (action.type) {
    case ADMIN_PAGE_QUESTION_CHANGE:
      return [...state, action.payload];
    case ADMIN_PAGE_QUESTION_DELETE:
      return action.payload;
    default:
      return state;
  }
};

export const adminPageAnswerReducer = (
  state = defaultStateForAnswers,
  action
) => {
  switch (action.type) {
    case ADMIN_PAGE_ANSWER_CHANGE:
      return [...state, action.payload];
    case ADMIN_PAGE_ANSWER_DELETE:
      return state.filter(e => e !== action.payload);
    case ADMIN_PAGE_POLLS_DELETE:
      return action.payload;
    default:
      return state;
  }
};

export const adminPageSavedPolls = (state = [], action) => {
  switch (action.type) {
    case ADMIN_PAGE_POLLS_SAVE:
      state.push(action.payload);
      return state;
    case POLLS_PAGE_ACTIVATE_POLL:
      state.map(l => (l.isActive = false));
      state[action.payload].isActive = !state[action.payload].isActive;
      return state;
    case PROFILE_PAGE_CLICK_ON_VARIANT:
      return [
        ...state,
        state.map((e, i) =>
          e.isActive ? e.answers[action.payload].count++ : i++
        )
      ];

    default:
      return state;
  }
};

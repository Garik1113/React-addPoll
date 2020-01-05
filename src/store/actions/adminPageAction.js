export const ADMIN_PAGE_QUESTION_CHANGE = "ADMIN_PAGE_QUESTION_CHANGE";
export const ADMIN_PAGE_QUESTION_DELETE = "ADMIN_PAGE_QUESTION_DELETE";
export const ADMIN_PAGE_ANSWER_CHANGE = "ADMIN_PAGE_ANSWER_CHANGE";
export const ADMIN_PAGE_ANSWER_DELETE = "ADMIN_PAGE_ANSWER_DELETE";
export const ADMIN_PAGE_POLLS_SAVE = "ADMIN_PAGE_POLLS_SAVE";
export const ADMIN_PAGE_POLLS_DELETE = "ADMIN_PAGE_POLLS_DELETE";

export const adminPageQuestionAction = question => {
  return {
    type: ADMIN_PAGE_QUESTION_CHANGE,
    payload: question
  };
};

export const adminPageQuestionDeleteAction = () => {
  return {
    type: ADMIN_PAGE_QUESTION_DELETE,
    payload: []
  };
};

export const adminPageAnswerAction = answer => {
  return {
    type: ADMIN_PAGE_ANSWER_CHANGE,
    payload: answer
  };
};

export const adminPageAnswerDeleteAction = answer => {
  return {
    type: ADMIN_PAGE_ANSWER_DELETE,
    payload: answer
  };
};

export const adminPagePollsSaveAction = poll => {
  return {
    type: ADMIN_PAGE_POLLS_SAVE,
    payload: poll
  };
};

export const adminPagePollsDeleteAction = () => {
  return {
    type: ADMIN_PAGE_POLLS_DELETE,
    payload: []
  };
};

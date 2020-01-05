export const POLLS_PAGE_ACTIVATE_POLL = "ACTIVATE";

export const pollsPageActivatePoll = index => {
  return {
    type: POLLS_PAGE_ACTIVATE_POLL,
    payload: index
  };
};

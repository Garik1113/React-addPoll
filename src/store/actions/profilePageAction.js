export const PROFILE_PAGE_CLICK_ON_VARIANT = "PROFILE_PAGE_CLICK_ON_VARIANT";

export const profilePageClickOnVariant = index => {
  return {
    type: PROFILE_PAGE_CLICK_ON_VARIANT,
    payload: index
  };
};

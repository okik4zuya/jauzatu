export const setActive = (data) => (dispatch) => {
  dispatch({ type: "ACTIVE_COMPONENT", payload: data });
};

export const setActive = (data) => (dispatch) => {
  dispatch({ type: "ACTIVE_COMPONENT", payload: data });
};
export const setShowSideMenu = (data) => (dispatch) => {
  dispatch({ type: "SHOW_SIDE_MENU", payload: data });
};
export const setSearchUser = (data) => (dispatch) => {
  dispatch({ type: "SEARCH_USER", payload: data });
};
export const setFilterUser = (data) => (dispatch) => {
  dispatch({ type: "FILTER_USER", payload: data });
};
export const setSearchInvitation = (data) => (dispatch) => {
  dispatch({ type: "SEARCH_INVITATION", payload: data });
};
export const setFilterInvitation = (data) => (dispatch) => {
  dispatch({ type: "FILTER_INVITATION", payload: data });
};

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
export const setShowTemaModal = (data) => (dispatch) => {
  dispatch({ type: "SHOW_TEMA_MODAL", payload: data });
};
export const setShowAudioModal = (data) => (dispatch) => {
  dispatch({ type: "SHOW_AUDIO_MODAL", payload: data });
};
export const setShowUserModal = (data) => (dispatch) => {
  dispatch({ type: "SHOW_USER_MODAL", payload: data });
};
export const setShowUndanganModal = (data) => (dispatch) => {
  dispatch({ type: "SHOW_UNDANGAN_MODAL", payload: data });
};

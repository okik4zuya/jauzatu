export const adminReducer = (
  state = {
    showSideMenu: true,
    active: "Overview",
  },

  action
) => {
  switch (action.type) {
    case "SHOW_SIDE_MENU":
      return { showSideMenu: action.payload };
    case "ACTIVE_COMPONENT":
      return { ...state, active: action.payload };

    default:
      return state;
  }
};

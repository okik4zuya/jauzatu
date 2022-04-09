export const adminReducer = (
  state = {
    showSideMenu: true,
    active: "Overview",
    searchUser: "",
    filterUser: "",
    searchInvitation: "",
    filterInvitation: "",
  },

  action
) => {
  switch (action.type) {
    case "SHOW_SIDE_MENU":
      return { showSideMenu: action.payload };
    case "ACTIVE_COMPONENT":
      return { ...state, active: action.payload };
    case "SEARCH_USER":
      return { ...state, searchUser: action.payload };
    case "FILTER_USER":
      return { ...state, filterUser: action.payload };
    case "SEARCH_INVITATION":
      return { ...state, searchInvitation: action.payload };
    case "FILTER_INVITATION":
      return { ...state, filterInvitation: action.payload };

    default:
      return state;
  }
};

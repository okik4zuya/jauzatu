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
    case "SHOW_TEMA_MODAL":
      return { ...state, showTemaModal: action.payload };
    case "SHOW_AUDIO_MODAL":
      return { ...state, showAudioModal: action.payload };
    case "SHOW_USER_MODAL":
      return { ...state, showUserModal: action.payload };
    case "SHOW_UNDANGAN_MODAL":
      return { ...state, showUndanganModal: action.payload };
    case "IS_TEMA_EDIT":
      return { ...state, isTemaEdit: action.payload };
    case "IS_UNDANGAN_EDIT":
      return { ...state, isUndanganEdit: action.payload };
    case "IS_USER_EDIT":
      return { ...state, isUserEdit: action.payload };
    case "IS_AUDIO_EDIT":
      return { ...state, isAudioEdit: action.payload };

    default:
      return state;
  }
};

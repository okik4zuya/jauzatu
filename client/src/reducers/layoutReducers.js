import {
  SHOW_SIDE_MENU,
  ACTIVE_COMPONENT,
  IS_CREATED,
  SHOW_LOVEJOURNEY_MODAL,
  IS_LOVEJOURNEY_EDIT,
  SINGLE_LOVEJOURNEY,
  LOVEJOURNEY_ID,
} from "../constants/layoutConstants";

export const dashboardReducer = (
  state = {
    showSideMenu: true,
    active: "Overview",
    isCreated: false,
    showLoveJourneyModal: false,
    isLoveJourneyEdit: false,
    singleLoveJourney: { title: "", text: "" },
    loveJourneyId: 0,
  },
  action
) => {
  switch (action.type) {
    case SHOW_SIDE_MENU:
      return { showSideMenu: action.payload };
    case ACTIVE_COMPONENT:
      return { ...state, active: action.payload };
    case IS_CREATED:
      return { ...state, isCreated: action.payload };
    case SHOW_LOVEJOURNEY_MODAL:
      return { ...state, showLoveJourneyModal: action.payload };
    case IS_LOVEJOURNEY_EDIT:
      return { ...state, isLoveJourneyEdit: action.payload };
    case SINGLE_LOVEJOURNEY:
      return { ...state, singleLoveJourney: action.payload };
    case LOVEJOURNEY_ID:
      return { ...state, loveJourneyId: action.payload };

    default:
      return state;
  }
};

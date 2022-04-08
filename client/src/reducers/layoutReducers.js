import {
  SHOW_SIDE_MENU,
  ACTIVE_COMPONENT,
  IS_CREATED,
  SHOW_LOVEJOURNEY_MODAL,
  IS_LOVEJOURNEY_EDIT,
  SINGLE_LOVEJOURNEY,
  LOVEJOURNEY_ID,
  SHOW_GALERI_MODAL,
  IS_GALERI_EDIT,
  SINGLE_GALERI,
  GALERI_ID,
  SHOW_POJOKHADIAH_MODAL,
  IS_POJOKHADIAH_EDIT,
  SINGLE_POJOKHADIAH,
  POJOKHADIAH_ID,
  SHOW_AUDIOLATAR_MODAL,
  SINGLE_UCAPAN,
  UCAPAN_ID,
  SHOW_UCAPAN_REPLY_FORM,
  SINGLE_RSVP,
  RSVP_ID,
  IS_RSVP_EDIT,
  IS_RSVP_ADD,
  SHOW_RSVP_MODAL,
  SEARCH_RSVP,
  SHOW_DELETE_CONFIRMATION,
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
    showGaleriModal: false,
    isGaleriEdit: false,
    singleGaleri: { image: "" },
    galeriId: 0,
    singlePojokHadiah: {
      channelType: "Rekening Bank",
      channelName: "Bank BCA",
      channelNameLainnya: "",
      name: "",
      address: "",
      image: "",
      contact: "",
    },
    showAudioLatarModal: false,
    singleUcapan: {
      name: "",
      text: "",
      like: 0,
    },
    showUcapanReplyForm: false,
    singleRSVP: {
      name: "",
      confirmation: "Hadir",
      attendees: 0,
    },
    isRSVPEdit: false,
    isRSVPAdd: false,
    showRSVPModal: false,
    searchRSVP: "",
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
    case SHOW_GALERI_MODAL:
      return { ...state, showGaleriModal: action.payload };
    case IS_GALERI_EDIT:
      return { ...state, isGaleriEdit: action.payload };
    case SINGLE_GALERI:
      return { ...state, singleGaleri: action.payload };
    case GALERI_ID:
      return { ...state, galeriId: action.payload };
    case SHOW_POJOKHADIAH_MODAL:
      return { ...state, showPojokHadiahModal: action.payload };
    case IS_POJOKHADIAH_EDIT:
      return { ...state, isPojokHadiahEdit: action.payload };
    case SINGLE_POJOKHADIAH:
      return { ...state, singlePojokHadiah: action.payload };
    case POJOKHADIAH_ID:
      return { ...state, pojokHadiahId: action.payload };
    case SHOW_AUDIOLATAR_MODAL:
      return { ...state, showAudioLatarModal: action.payload };
    case SINGLE_UCAPAN:
      return { ...state, singleUcapan: action.payload };
    case UCAPAN_ID:
      return { ...state, ucapanId: action.payload };
    case SHOW_UCAPAN_REPLY_FORM:
      return { ...state, showUcapanReplyForm: action.payload };
    case SINGLE_RSVP:
      return { ...state, singleRSVP: action.payload };
    case RSVP_ID:
      return { ...state, RSVPId: action.payload };
    case IS_RSVP_ADD:
      return { ...state, isRSVPAdd: action.payload };
    case IS_RSVP_EDIT:
      return { ...state, isRSVPEdit: action.payload };
    case SHOW_RSVP_MODAL:
      return { ...state, showRSVPModal: action.payload };
    case SEARCH_RSVP:
      return { ...state, searchRSVP: action.payload };

    case SHOW_DELETE_CONFIRMATION:
      return { ...state, showDeleteConfirmation: action.payload };

    default:
      return state;
  }
};

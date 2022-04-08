import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ACTIVE_COMPONENT,
  IS_CREATED,
  IS_LOVEJOURNEY_EDIT,
  LOVEJOURNEY_ID,
  SHOW_DELETE_CONFIRMATION,
  SHOW_LOVEJOURNEY_MODAL,
  SHOW_SIDE_MENU,
  SINGLE_LOVEJOURNEY,
  SINGLE_GALERI,
  GALERI_ID,
  IS_GALERI_EDIT,
  SHOW_GALERI_MODAL,
  SINGLE_POJOKHADIAH,
  POJOKHADIAH_ID,
  IS_POJOKHADIAH_EDIT,
  SHOW_AUDIOLATAR_MODAL,
  SHOW_POJOKHADIAH_MODAL,
  SINGLE_UCAPAN,
  SHOW_UCAPAN_REPLY_FORM,
  SINGLE_RSVP,
  UCAPAN_ID,
  IS_RSVP_EDIT,
  IS_RSVP_ADD,
  SHOW_RSVP_MODAL,
  SEARCH_RSVP,
  RSVP_ID,
} from "../constants/layoutConstants";

export const set = (bool) => (dispatch) => {
  dispatch({ type: SHOW_SIDE_MENU, payload: bool });
};
export const setActive = (title) => (dispatch) => {
  dispatch({ type: ACTIVE_COMPONENT, payload: title });
};
export const setIsCreated = (data) => (dispatch) => {
  dispatch({ type: IS_CREATED, payload: data });
};
export const setShowSideMenu = (data) => (dispatch) => {
  dispatch({ type: SHOW_SIDE_MENU, payload: data });
};
export const setShowLoveJourneyModal = (data) => (dispatch) => {
  dispatch({ type: SHOW_LOVEJOURNEY_MODAL, payload: data });
};
export const setIsLoveJourneyEdit = (data) => (dispatch) => {
  dispatch({ type: IS_LOVEJOURNEY_EDIT, payload: data });
};
export const setSingleLoveJourney = (data) => (dispatch) => {
  dispatch({ type: SINGLE_LOVEJOURNEY, payload: data });
};
export const setLoveJourneyId = (data) => (dispatch) => {
  dispatch({ type: LOVEJOURNEY_ID, payload: data });
};
export const setShowGaleriModal = (data) => (dispatch) => {
  dispatch({ type: SHOW_GALERI_MODAL, payload: data });
};
export const setIsGaleriEdit = (data) => (dispatch) => {
  dispatch({ type: IS_GALERI_EDIT, payload: data });
};
export const setSingleGaleri = (data) => (dispatch) => {
  dispatch({ type: SINGLE_GALERI, payload: data });
};
export const setGaleriId = (data) => (dispatch) => {
  dispatch({ type: GALERI_ID, payload: data });
};
export const setShowPojokHadiahModal = (data) => (dispatch) => {
  dispatch({ type: SHOW_POJOKHADIAH_MODAL, payload: data });
};
export const setIsPojokHadiahEdit = (data) => (dispatch) => {
  dispatch({ type: IS_POJOKHADIAH_EDIT, payload: data });
};
export const setSinglePojokHadiah = (data) => (dispatch) => {
  dispatch({ type: SINGLE_POJOKHADIAH, payload: data });
};
export const setPojokHadiahId = (data) => (dispatch) => {
  dispatch({ type: POJOKHADIAH_ID, payload: data });
};
export const setShowAudioLatarModal = (data) => (dispatch) => {
  dispatch({ type: SHOW_AUDIOLATAR_MODAL, payload: data });
};
export const setSingleUcapan = (data) => (dispatch) => {
  dispatch({ type: SINGLE_UCAPAN, payload: data });
};
export const setUcapanId = (data) => (dispatch) => {
  dispatch({ type: UCAPAN_ID, payload: data });
};
export const setShowUcapanReplyForm = (data) => (dispatch) => {
  dispatch({ type: SHOW_UCAPAN_REPLY_FORM, payload: data });
};
export const setSingleRSVP = (data) => (dispatch) => {
  dispatch({ type: SINGLE_RSVP, payload: data });
};
export const setRSVPId = (data) => (dispatch) => {
  dispatch({ type: RSVP_ID, payload: data });
};
export const setIsRSVPEdit = (data) => (dispatch) => {
  dispatch({ type: IS_RSVP_EDIT, payload: data });
};
export const setIsRSVPAdd = (data) => (dispatch) => {
  dispatch({ type: IS_RSVP_ADD, payload: data });
};
export const setShowRSVPModal = (data) => (dispatch) => {
  dispatch({ type: SHOW_RSVP_MODAL, payload: data });
};
export const setSearchRSVP = (data) => (dispatch) => {
  dispatch({ type: SEARCH_RSVP, payload: data });
};
export const setShowDeleteConfirmation = (data) => (dispatch) => {
  dispatch({ type: SHOW_DELETE_CONFIRMATION, payload: data });
};

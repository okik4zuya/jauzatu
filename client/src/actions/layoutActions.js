import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ACTIVE_COMPONENT,
  IS_CREATED,
  IS_LOVEJOURNEY_EDIT,
  LOVEJOURNEY_ID,
  SHOW_LOVEJOURNEY_MODAL,
  SHOW_SIDE_MENU,
  SINGLE_LOVEJOURNEY,
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

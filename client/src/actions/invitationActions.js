import {
  INVITATION_LIST_FAIL,
  INVITATION_LIST_REQUEST,
  INVITATION_LIST_SUCCESS,
  INVITATION_CREATE_FAIL,
  INVITATION_CREATE_REQUEST,
  INVITATION_CREATE_SUCCESS,
  INVITATION_UPDATE_FAIL,
  INVITATION_UPDATE_REQUEST,
  INVITATION_UPDATE_SUCCESS,
  INVITATION_DELETE_FAIL,
  INVITATION_DELETE_REQUEST,
  INVITATION_DELETE_SUCCESS,
} from "../constants/invitationConstants";
import axios from "axios";
import { BASE_URL } from "../constants/urlConstants";

export const listInvitations = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INVITATION_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/invitations/userid`, config);

    dispatch({
      type: INVITATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INVITATION_LIST_FAIL,
      payload: message,
    });
  }
};

export const updateInvitationAction =
  (id, slug, tema, namaLengkapPria, namaPria, namaLengkapWanita, namaWanita) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: INVITATION_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/api/invitations/id/${id}`,
        {
          slug,
          tema,
          namaLengkapPria,
          namaPria,
          namaLengkapWanita,
          namaWanita,
        },
        config
      );

      dispatch({
        type: INVITATION_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: INVITATION_UPDATE_FAIL,
        payload: message,
      });
    }
  };

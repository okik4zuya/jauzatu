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
  INVITATION_UPDATE_FINISH,
  INVITATION_DELETE_FAIL,
  INVITATION_DELETE_REQUEST,
  INVITATION_DELETE_SUCCESS,
} from "../constants/invitationConstants";
import { USER_CREATE_INVITATION } from "../constants/userConstants";
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

export const createInvitationAction = (slug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INVITATION_CREATE_REQUEST,
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

    const { data } = await axios.post(
      `/api/invitations/create`,
      { slug },
      config
    );

    dispatch({
      type: USER_CREATE_INVITATION,
    });

    dispatch({
      type: INVITATION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INVITATION_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deleteInvitationAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INVITATION_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `${BASE_URL}/api/invitations/id/${id}`,
      config
    );

    dispatch({
      type: INVITATION_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INVITATION_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateInvitationAction =
  (updated) => async (dispatch, getState) => {
    console.log(updated);
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
      const {
        id,
        slug,
        tema,
        namaLengkapPria,
        namaPria,
        namaLengkapWanita,
        namaWanita,
        waktuAkad,
        waktuResepsi,
        lokasiAkad,
        lokasiResepsi,
        linkGoogleMaps,
        iFrameGoogleMaps,
        teksTanggalDepan,
        teksSalamPembuka,
        teksPendahuluan,
        teksHariAkad,
        teksTanggalAkad,
        teksJamAkad,
        teksHariResepsi,
        teksTanggalResepsi,
        teksJamResepsi,
        teksBulan,
        teksTahun,
        teksOrangTuaPria,
        teksOrangTuaWanita,
        teksAyat,
        teksPenutup,
        teksSalamPenutup,
        teksKamiYangBerbahagia,
        teksKelPria,
        teksKelWanita,
      } = updated;

      const { data } = await axios.put(
        `${BASE_URL}/api/invitations/id/${id}`,
        {
          slug,
          tema,
          namaLengkapPria,
          namaPria,
          namaLengkapWanita,
          namaWanita,
          waktuAkad,
          waktuResepsi,
          lokasiAkad,
          lokasiResepsi,
          linkGoogleMaps,
          iFrameGoogleMaps,
          teksTanggalDepan,
          teksSalamPembuka,
          teksPendahuluan,
          teksHariAkad,
          teksTanggalAkad,
          teksJamAkad,
          teksHariResepsi,
          teksTanggalResepsi,
          teksJamResepsi,
          teksBulan,
          teksTahun,
          teksOrangTuaPria,
          teksOrangTuaWanita,
          teksAyat,
          teksPenutup,
          teksSalamPenutup,
          teksKamiYangBerbahagia,
          teksKelPria,
          teksKelWanita,
        },
        config
      );

      dispatch({
        type: INVITATION_UPDATE_SUCCESS,
        payload: data,
      });
      setTimeout(() => {
        dispatch({
          type: INVITATION_UPDATE_FINISH,
        });
      }, 8000);
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

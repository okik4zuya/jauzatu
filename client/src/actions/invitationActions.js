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
  INVITATION_FETCH_FAIL,
  INVITATION_FETCH_REQUEST,
  INVITATION_FETCH_SUCCESS,
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
  (updated, isPublic) => async (dispatch, getState) => {
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
      const path = `${
        isPublic ? `/api/invitations/public/id/` : `/api/invitations/id/`
      }`;
      console.log(path);
      const { data } = await axios.put(
        `${BASE_URL}${path}${updated.id}`,
        {
          slug: updated.slug,
          tema: updated.tema,
          namaLengkapPria: updated.namaLengkapPria,
          namaPria: updated.namaPria,
          namaLengkapWanita: updated.namaLengkapWanita,
          namaWanita: updated.namaWanita,
          waktuAkad: updated.waktuAkad,
          waktuResepsi: updated.waktuResepsi,
          lokasiAkad: updated.lokasiAkad,
          lokasiResepsi: updated.lokasiResepsi,
          teksTanggalDepan: updated.teksTanggalDepan,
          teksSalamPembuka: updated.teksSalamPembuka,
          teksPendahuluan: updated.teksPendahuluan,
          teksHariAkad: updated.teksHariAkad,
          teksTanggalAkad: updated.teksTanggalAkad,
          teksJamAkad: updated.teksJamAkad,
          teksHariResepsi: updated.teksHariResepsi,
          teksTanggalResepsi: updated.teksTanggalResepsi,
          teksJamResepsi: updated.teksJamResepsi,
          teksBulan: updated.teksBulan,
          teksTahun: updated.teksTahun,
          teksOrangTuaPria: updated.teksOrangTuaPria,
          teksOrangTuaWanita: updated.teksOrangTuaWanita,
          teksAyat: updated.teksAyat,
          teksPenutup: updated.teksPenutup,
          teksSalamPenutup: updated.teksSalamPenutup,
          teksKamiYangBerbahagia: updated.teksKamiYangBerbahagia,
          teksKelPria: updated.teksKelPria,
          teksKelWanita: updated.teksKelWanita,
          fitur: updated.fitur,
          dataFitur: updated.dataFitur,
          loveJourney: updated.loveJourney,
          galeri: updated.galeri,
          pojokHadiah: updated.pojokHadiah,
          ucapan: updated.ucapan,
          rsvp: updated.rsvp,
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

export const fetchInvitationAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INVITATION_FETCH_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${BASE_URL}/api/invitations/userid`,
      config
    );

    dispatch({
      type: INVITATION_FETCH_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INVITATION_FETCH_FAIL,
      payload: message,
    });
  }
};

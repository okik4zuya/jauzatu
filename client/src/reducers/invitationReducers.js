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

export const invitationListReducer = (state = { invitations: [] }, action) => {
  switch (action.type) {
    case INVITATION_LIST_REQUEST:
      return { loading: true };
    case INVITATION_LIST_SUCCESS:
      return { loading: false, invitations: action.payload };
    case INVITATION_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const invitationCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INVITATION_CREATE_REQUEST:
      return { loading: true };
    case INVITATION_CREATE_SUCCESS:
      return { loading: false, success: true };
    case INVITATION_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const invitationUpdateReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case INVITATION_UPDATE_REQUEST:
      return { loading: true, success: false };
    case INVITATION_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case INVITATION_UPDATE_FINISH:
      return { loading: false, success: false };
    case INVITATION_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const invitationDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case INVITATION_DELETE_REQUEST:
      return { loading: true, success: false };
    case INVITATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case INVITATION_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const invitationFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case INVITATION_FETCH_REQUEST:
      return { loading: true };
    case INVITATION_FETCH_SUCCESS:
      return { loading: false, invitation: action.payload[0] };
    case INVITATION_FETCH_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

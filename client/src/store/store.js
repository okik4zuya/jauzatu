import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  userCreateInvitationReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "../reducers/userReducers";
import {
  noteCreateReducer,
  noteListReducer,
  noteUpdateReducer,
  noteDeleteReducer,
} from "../reducers/noteReducers";
import {
  invitationCreateReducer,
  invitationListReducer,
  invitationUpdateReducer,
  invitationDeleteReducer,
  invitationFetchReducer,
} from "../reducers/invitationReducers";
import { dashboardReducer } from "../reducers/layoutReducers";

const reducer = combineReducers({
  // List of reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userCreateInvitation: userCreateInvitationReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: userUpdateReducer,
  dashboard: dashboardReducer,
  invitationList: invitationListReducer,
  invitationCreate: invitationCreateReducer,
  invitationUpdate: invitationUpdateReducer,
  invitationDelete: invitationDeleteReducer,
  invitationFetch: invitationFetchReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

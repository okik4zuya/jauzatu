import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  Input,
  Button,
  Container,
  Center,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { setIsCreated, setActive } from "../../../actions/layoutActions";
import { createInvitationAction } from "../../../actions/invitationActions";
import { updateProfile } from "../../../actions/userActions";

import { BelumBuat, Spinner, AlertSuccess, FrameDashboard } from "../../";

export default function BuatUndangan() {
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { isCreated, active } = layout;
  const invitationCreate = useSelector((state) => state.invitationCreate);
  const { loading: loadingCreate, success: successCreate } = invitationCreate;
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createInvitationAction(slug));
    dispatch(
      updateProfile({
        ...userInfo,
        invitationCreated: true,
      })
    );
  };

  return (
    <FrameDashboard title="Buat Undangan">
      {!userInfo.invitationCreated && (
        <div className="bg-gold rounded-xl h-[150px] grid place-items-center">
          <div>
            <form onSubmit={handleSubmit}>
              <div class="mb-4 w-full">
                <input
                  type="text"
                  name="name"
                  className="form__input text-center"
                  placeholder="masukan slug..."
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                />
              </div>

              <div className="grid place-items-center">
                <button
                  type="submit"
                  className="primary__button bg-teal-600 hover:bg-teal-500"
                >
                  {loadingCreate ? <Spinner /> : "Buat"}
                </button>
              </div>

              {/* {successCreate && (
              <AlertSuccess>Undangan berhasil dibuat!!!</AlertSuccess>
            )} */}
            </form>
          </div>
        </div>
      )}

      {userInfo.invitationCreated && (
        <div className="h-[150px] grid place-items-center">
          <div className="w-3/4 text-center">
            Selamat!!! Undangan anda sudah berhasil dibuat. Lanjutkan untuk
            mengedit undangan anda!
          </div>
          <button
            className="primary__button"
            onClick={() => dispatch(setActive("Pilih Tema"))}
          >
            Lanjutkan
          </button>
        </div>
      )}
    </FrameDashboard>
  );
}

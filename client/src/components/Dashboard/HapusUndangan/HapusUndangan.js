import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteInvitationAction } from "../../../actions/invitationActions";
import { setActive } from "../../../actions/layoutActions";

import { updateProfile } from "../../../actions/userActions";
import { FrameDashboard } from "../../";

import { BelumBuat, Spinner, AlertSuccess } from "../../";

export default function HapusUndangan({ data }) {
  const dispatch = useDispatch();

  const invitationDelete = useSelector((state) => state.invitationDelete);
  const { loading: loadingDelete, success: successDelete } = invitationDelete;
  const { userInfo } = useSelector((state) => state.userLogin);
  console.log(userInfo);

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteInvitationAction(data?._id));
    dispatch(
      updateProfile({
        ...userInfo,
        invitationCreated: false,
      })
    );
    dispatch(setActive("Buat Undangan"));
  };

  return (
    <FrameDashboard title="Hapus Undangan">
      <div className="mt-6  text-center">
        Setelah menghapus undangan anda, semua data tidak akan tersimpan. Anda
        yakin ingin menghapus undangan? Klik tombol "Hapus" untuk menghapus
        undangan anda.
      </div>
      <div className="grid place-items-center mt-6">
        <button className="primary__button" onClick={deleteHandler}>
          {loadingDelete ? <Spinner /> : "Hapus Undangan"}
        </button>
      </div>
    </FrameDashboard>
  );
}

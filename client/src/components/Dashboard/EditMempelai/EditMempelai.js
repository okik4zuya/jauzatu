import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  listInvitations,
  updateInvitationAction,
} from "../../../actions/invitationActions";
import { FrameDashboard } from "../../";
import { BASE_URL } from "../../../constants/urlConstants";
import axios from "axios";
import { BelumBuat, Spinner, AlertSuccess } from "../../";

export default function EditMempelai({ data }) {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState({
    id: data?._id,
    slug: data?.slug,
    tema: data?.tema,
    namaLengkapPria: data?.namaLengkapPria,
    namaPria: data?.namaPria,
    namaLengkapWanita: data?.namaLengkapWanita,
    namaWanita: data?.namaWanita,
  });

  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;

  console.log(loadingUpdate, successUpdate);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction(
        updated.id,
        updated.slug,
        updated.tema,
        updated.namaLengkapPria,
        updated.namaPria,
        updated.namaLengkapWanita,
        updated.namaWanita
      )
    );
  };

  return (
    <FrameDashboard title="Edit Mempelai">
      <div className="mt-6">
        {data ? (
          <form onSubmit={updateHandler}>
            <div className="lg:w-[400px] mx-auto">
              <div class="mb-4 w-full">
                <label for="name" class="form__label">
                  Nama Lengkap Pria
                </label>
                <input
                  type="text"
                  name="name"
                  class="form__input"
                  placeholder=""
                  value={updated.namaLengkapPria}
                  onChange={(e) =>
                    setUpdated({ ...updated, namaLengkapPria: e.target.value })
                  }
                  required
                />
              </div>
              <div class="mb-4 w-full">
                <label for="name" class="form__label">
                  Nama Panggilan Pria
                </label>
                <input
                  type="text"
                  name="name"
                  class="form__input"
                  placeholder=""
                  value={updated.namaPria}
                  onChange={(e) =>
                    setUpdated({ ...updated, namaPria: e.target.value })
                  }
                  required
                />
              </div>
              <div class="mb-4 w-full">
                <label for="name" class="form__label">
                  Nama Lengkap Wanita
                </label>
                <input
                  type="text"
                  name="name"
                  class="form__input"
                  placeholder=""
                  value={updated.namaLengkapWanita}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      namaLengkapWanita: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div class="mb-4 w-full">
                <label for="name" class="form__label">
                  Nama Pangggilan Wanita
                </label>
                <input
                  type="text"
                  name="name"
                  class="form__input"
                  placeholder=""
                  value={updated.namaWanita}
                  onChange={(e) =>
                    setUpdated({ ...updated, namaWanita: e.target.value })
                  }
                  required
                />
              </div>
              {successUpdate && (
                <AlertSuccess>Data berhasil diubah</AlertSuccess>
              )}

              <div className="grid place-items-center">
                <button type="submit" className="primary__button">
                  {loadingUpdate ? <Spinner /> : "Update"}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <BelumBuat />
        )}
      </div>
    </FrameDashboard>
  );
}

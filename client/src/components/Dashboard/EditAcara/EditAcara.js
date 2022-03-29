import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import { FrameDashboard } from "../../";

import { BelumBuat, Spinner, AlertSuccess } from "../../";

export default function EditAcara({ data }) {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState({
    ...data,
    id: data?._id,
  });

  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;

  console.log(updated);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateInvitationAction(updated));
  };

  return (
    <FrameDashboard title="Edit Acara">
      <div className="mt-6">
        {data ? (
          <form onSubmit={updateHandler}>
            <div className="lg:w-[400px] mx-auto">
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Waktu Akad
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.waktuAkad}
                  onChange={(e) =>
                    setUpdated({ ...updated, waktuAkad: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Waktu Resepsi
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.waktuResepsi}
                  onChange={(e) =>
                    setUpdated({ ...updated, waktuResepsi: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Lokasi Akad
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.lokasiAkad}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      lokasiAkad: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Lokasi Resepsi
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.lokasiResepsi}
                  onChange={(e) =>
                    setUpdated({ ...updated, lokasiResepsi: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Link Google Maps
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.linkGoogleMaps}
                  onChange={(e) =>
                    setUpdated({ ...updated, linkGoogleMaps: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  iFrame Google Maps
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.iFrameGoogleMaps}
                  onChange={(e) =>
                    setUpdated({ ...updated, iFrameGoogleMaps: e.target.value })
                  }
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

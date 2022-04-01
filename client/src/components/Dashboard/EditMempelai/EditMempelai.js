import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import { FrameDashboard } from "../../";
import { BelumBuat, Spinner, AlertSuccess } from "../../";

export default function EditMempelai({ data }) {
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
    <FrameDashboard title="Edit Mempelai">
      <div className="mt-6">
        {data ? (
          <form onSubmit={updateHandler}>
            <div className="lg:w-[400px] mx-auto">
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Nama Lengkap Pria
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.namaLengkapPria}
                  onChange={(e) =>
                    setUpdated({ ...updated, namaLengkapPria: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Nama Panggilan Pria
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.namaPria}
                  onChange={(e) =>
                    setUpdated({ ...updated, namaPria: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Nama Lengkap Wanita
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.namaLengkapWanita}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      namaLengkapWanita: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Nama Pangggilan Wanita
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.namaWanita}
                  onChange={(e) =>
                    setUpdated({ ...updated, namaWanita: e.target.value })
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

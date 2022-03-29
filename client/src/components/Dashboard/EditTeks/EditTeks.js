import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import { FrameDashboard } from "../../";

import { BelumBuat, Spinner, AlertSuccess } from "../../";

export default function EditTeks({ data }) {
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
    <FrameDashboard title="Edit Teks">
      <div className="mt-6">
        {data ? (
          <form onSubmit={updateHandler}>
            <div className="lg:w-[400px] mx-auto">
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Tanggal Depan
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksTanggalDepan}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksTanggalDepan: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Salam Pembuka
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksSalamPembuka}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksSalamPembuka: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Pendahuluan
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksPendahuluan}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      teksPendahuluan: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Hari Akad
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksHariAkad}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksHariAkad: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Tanggal Akad
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksTanggalAkad}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksTanggalAkad: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Jam Akad
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksJamAkad}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksJamAkad: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Hari Resepsi
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksHariResepsi}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksHariResepsi: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Tanggal Resepsi
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksTanggalResepsi}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      teksTanggalResepsi: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Jam Resepsi
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksJamResepsi}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksJamResepsi: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Bulan
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksBulan}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksBulan: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Tahun
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksTahun}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksTahun: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Orang Tua Pria
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksOrangTuaPria}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksOrangTuaPria: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Orang Tua Wanita
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksOrangTuaWanita}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      teksOrangTuaWanita: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Ayat
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksAyat}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksAyat: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Penutup
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksPenutup}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksPenutup: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Salam Penutup
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksSalamPenutup}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      teksSalamPenutup: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Kami yang Berbahagia
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksKamiYangBerbahagia}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      teksKamiYangBerbahagia: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Keluarga Pria
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksKelPria}
                  onChange={(e) =>
                    setUpdated({ ...updated, teksKelPria: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Teks Keluarga Wanita
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.teksKelWanita}
                  onChange={(e) =>
                    setUpdated({
                      ...updated,
                      teksKelWanita: e.target.value,
                    })
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

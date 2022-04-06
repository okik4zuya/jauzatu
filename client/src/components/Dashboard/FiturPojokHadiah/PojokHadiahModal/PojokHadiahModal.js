import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import {
  setShowPojokHadiahModal,
  setSinglePojokHadiah,
  setIsPojokHadiahEdit,
} from "../../../../actions/layoutActions";
import Spinner from "../../../Spinner";
import { imageList } from "./imageList.js";

export default function PojokHadiahModal({
  data,
  dataPojokHadiah,
  showButton,
}) {
  const dispatch = useDispatch();
  const [tempImage, setTempImage] = useState("");
  const [openLainnya, setOpenLainnya] = useState(false);
  const {
    showPojokHadiahModal,
    singlePojokHadiah,
    isPojokHadiahEdit,
    pojokHadiahId,
  } = useSelector((state) => state.dashboard);
  const { success: successUpdate, loading: loadingUpdate } = useSelector(
    (state) => state.invitationUpdate
  );

  useEffect(() => {
    if (singlePojokHadiah.channelName === "Lainnya") {
      setOpenLainnya(true);
      setTempImage("");
    } else {
      setOpenLainnya(false);
    }
  }, [singlePojokHadiah.channelName]);

  const openModal = (e) => {
    dispatch(setShowPojokHadiahModal(true));
    dispatch(setIsPojokHadiahEdit(false));
    dispatch(
      setSinglePojokHadiah({
        ...singlePojokHadiah,
        channelType: "Rekening Bank",
        channelName: "Bank BCA",
        channelNameLainnya: "",
        image:
          "https://res.cloudinary.com/diztl7cl4/image/upload/v1648868806/jauzatu/bca_tho4gp.png",
        name: "",
        address: "",
        contact: "",
      })
    );
  };

  const closeModal = () => {
    dispatch(setShowPojokHadiahModal(false));
  };

  const setNameImage = (e) => {
    dispatch(
      setSinglePojokHadiah({
        ...singlePojokHadiah,
        channelName: e.target.value,
        image: imageList.filter((item) => item.name == e.target.value)[0].image,
      })
    );
  };

  const updatePojokHadiah = (e) => {
    if (isPojokHadiahEdit) {
      e.preventDefault();
      const objIndex = dataPojokHadiah.findIndex(
        (obj) => obj._id == pojokHadiahId
      );
      dataPojokHadiah[objIndex].channelType = singlePojokHadiah.channelType;
      dataPojokHadiah[objIndex].channelName = singlePojokHadiah.channelName;
      dataPojokHadiah[objIndex].channelNameLainnya =
        singlePojokHadiah.channelNameLainnya;
      dataPojokHadiah[objIndex].name = singlePojokHadiah.name;
      dataPojokHadiah[objIndex].address = singlePojokHadiah.address;
      dataPojokHadiah[objIndex].image = singlePojokHadiah.image;
      dataPojokHadiah[objIndex].contact = singlePojokHadiah.contact;
      dispatch(
        updateInvitationAction({
          ...data,
          id: data?._id,
          pojokHadiah: dataPojokHadiah,
        })
      );
      dispatch(setShowPojokHadiahModal(false));
    } else {
      e.preventDefault();
      dispatch(
        updateInvitationAction({
          ...data,
          id: data?._id,
          pojokHadiah: [...data?.pojokHadiah, singlePojokHadiah],
        })
      );

      dispatch(setShowPojokHadiahModal(false));
    }
  };

  return (
    <>
      {showButton && (
        <div className="grid place-items-center">
          <button className="primary__button" type="button" onClick={openModal}>
            Tambah Channel
          </button>
        </div>
      )}

      {showPojokHadiahModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-[400px] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="absolute top-2 right-4 text-xl cursor-pointer"
                  onClick={closeModal}
                >
                  x
                </div>
                {/*body*/}
                <div className="mt-6 px-6 py-6 w-full sm:w-[400px]">
                  <form>
                    <div className="px-6">
                      <div className="mb-4 w-full">
                        <label for="name" className="form__label">
                          Channel
                        </label>
                        <select
                          type="text"
                          name="name"
                          className="form__select"
                          placeholder=""
                          value={singlePojokHadiah.channelType}
                          onChange={(e) =>
                            dispatch(
                              setSinglePojokHadiah({
                                ...singlePojokHadiah,
                                channelType: e.target.value,
                              })
                            )
                          }
                        >
                          <option>Rekening Bank</option>
                          <option>e-Wallet</option>
                          <option>Kirim Kado</option>
                        </select>
                      </div>
                      {singlePojokHadiah.channelType !== "Kirim Kado" && (
                        <div className="mb-4 w-full">
                          <label for="name" className="form__label">
                            {singlePojokHadiah.channelType === "e-Wallet"
                              ? "Nama e-Wallet"
                              : "Nama Bank"}
                          </label>
                          <select
                            type="text"
                            name="name"
                            className="form__select"
                            value={singlePojokHadiah.channelName}
                            placeholder={
                              singlePojokHadiah.channelType === "e-Wallet"
                                ? "contoh: DANA, OVO, dll"
                                : "contoh: Rek BCA"
                            }
                            onChange={setNameImage}
                          >
                            {singlePojokHadiah.channelType ===
                            "Rekening Bank" ? (
                              <>
                                {imageList
                                  .filter(
                                    (item) => item.type === "Rekening Bank"
                                  )
                                  .map((item) => {
                                    return <option>{item.name}</option>;
                                  })}
                              </>
                            ) : (
                              <>
                                {imageList
                                  .filter((item) => item.type === "e-Wallet")
                                  .map((item) => {
                                    return <option>{item.name}</option>;
                                  })}
                              </>
                            )}
                          </select>
                        </div>
                      )}
                      {openLainnya === true && (
                        <>
                          <div className="mb-4 -mt-2 w-full">
                            <input
                              type="text"
                              name="name"
                              className="form__input"
                              placeholder="contoh: Bank Barokah"
                              value={singlePojokHadiah.channelNameLainnya}
                              onChange={(e) =>
                                dispatch(
                                  setSinglePojokHadiah({
                                    ...singlePojokHadiah,
                                    channelNameLainnya: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                          <div className="mb-4 w-full">
                            <label for="name" className="form__label">
                              URL Logo Bank / e-Wallet <em>(opsional)</em>
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="form__input"
                              placeholder="contoh: https://logo-bank.com/logo-bank.png"
                              value={singlePojokHadiah.image}
                              onChange={(e) =>
                                dispatch(
                                  setSinglePojokHadiah({
                                    ...singlePojokHadiah,
                                    image: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                        </>
                      )}

                      <div className="mb-4 w-full">
                        <label for="name" className="form__label">
                          Atas Nama
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form__input"
                          placeholder="contoh: A.N. Fulan Ahmad"
                          value={singlePojokHadiah.name}
                          onChange={(e) =>
                            dispatch(
                              setSinglePojokHadiah({
                                ...singlePojokHadiah,
                                name: e.target.value,
                              })
                            )
                          }
                        />
                      </div>
                      {singlePojokHadiah.channelType === "Kirim Kado" ? (
                        <>
                          <div className="mb-4 w-full">
                            <label for="name" className="form__label">
                              No. Kontak
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="form__input"
                              placeholder="contoh: 0877-7777-7777"
                              value={singlePojokHadiah.contact}
                              onChange={(e) =>
                                dispatch(
                                  setSinglePojokHadiah({
                                    ...singlePojokHadiah,
                                    contact: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                          <div className="mb-4 w-full">
                            <label for="name" className="form__label">
                              Alamat Pengiriman
                            </label>
                            <textarea
                              type="text"
                              name="name"
                              className="form__input h-[100px]"
                              placeholder="contoh: Jl. Sakinah no. 24, Kota Bandung, 40130"
                              value={singlePojokHadiah.address}
                              onChange={(e) =>
                                dispatch(
                                  setSinglePojokHadiah({
                                    ...singlePojokHadiah,
                                    address: e.target.value,
                                  })
                                )
                              }
                            />
                          </div>
                        </>
                      ) : (
                        <div className="mb-4 w-full">
                          <label for="name" className="form__label">
                            No. Rekening
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form__input"
                            placeholder="contoh: 0123456789"
                            value={singlePojokHadiah.address}
                            onChange={(e) =>
                              dispatch(
                                setSinglePojokHadiah({
                                  ...singlePojokHadiah,
                                  address: e.target.value,
                                })
                              )
                            }
                          />
                        </div>
                      )}

                      <div className="grid place-items-center">
                        <button
                          type="submit"
                          className="primary__button"
                          onClick={updatePojokHadiah}
                        >
                          {loadingUpdate ? <Spinner /> : "Tambah Channel"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

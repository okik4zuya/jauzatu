import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import {
  setIsPojokHadiahEdit,
  setSinglePojokHadiah,
} from "../../../../actions/layoutActions";
import Spinner from "../../../Spinner";

export default function PojokHadiahModalEdit({ data, dataPojokHadiah }) {
  const dispatch = useDispatch();
  const { isPojokHadiahEdit, singlePojokHadiah, pojokHadiahId } = useSelector(
    (state) => state.dashboard
  );
  const { loading: loadingUpdate, success: successUpdate } = useSelector(
    (state) => state.invitationUpdate
  );

  useEffect(() => {
    if (singlePojokHadiah.channelType === "Kirim Kado") {
      dispatch(
        setSinglePojokHadiah({
          ...singlePojokHadiah,
          channelName: "Kirim Kado",
          image: "",
        })
      );
    } else if (
      singlePojokHadiah.channelType === "Rekening Bank" &&
      !singlePojokHadiah.channelName
    ) {
      dispatch(
        setSinglePojokHadiah({
          ...singlePojokHadiah,
          channelName: "Bank BCA",
        })
      );

      switch (singlePojokHadiah.channelName) {
        case "Bank BCA":
          dispatch(
            setSinglePojokHadiah({
              ...singlePojokHadiah,
              image:
                "https://res.cloudinary.com/diztl7cl4/image/upload/v1648868806/jauzatu/bca_tho4gp.png",
            })
          );
          break;
        case "Bank BNI":
          dispatch(
            setSinglePojokHadiah({
              ...singlePojokHadiah,
              image:
                "https://res.cloudinary.com/diztl7cl4/image/upload/v1648867945/jauzatu/bni_sqmyqt.png",
            })
          );
          break;
        case "Bank BRI":
          dispatch(
            setSinglePojokHadiah({
              ...singlePojokHadiah,
              image:
                "https://res.cloudinary.com/diztl7cl4/image/upload/v1648868191/jauzatu/bri_rqtqwh.png",
            })
          );
          break;
        case "Bank Mandiri":
          dispatch(
            setSinglePojokHadiah({
              ...singlePojokHadiah,
              image:
                "https://res.cloudinary.com/diztl7cl4/image/upload/v1648869116/jauzatu/mandiri_nq3isf.png",
            })
          );
          break;

        default:
          break;
      }
    } else if (singlePojokHadiah.channelType === "e-Wallet") {
      dispatch(
        setSinglePojokHadiah({
          ...singlePojokHadiah,
          channelName: "DANA",
        })
      );

      switch (singlePojokHadiah.channelName) {
        case "DANA":
          dispatch(
            setSinglePojokHadiah({
              ...singlePojokHadiah,
              image:
                "https://res.cloudinary.com/diztl7cl4/image/upload/v1648871634/jauzatu/dana_zehwfq.png",
            })
          );
          break;
        case "OVO":
          dispatch(
            setSinglePojokHadiah({
              ...singlePojokHadiah,
              image:
                "https://res.cloudinary.com/diztl7cl4/image/upload/v1648871635/jauzatu/ovo_ziiwbi.png",
            })
          );
          break;

        default:
          break;
      }
    }
  }, [singlePojokHadiah.channelType, singlePojokHadiah.channelName]);

  const updatePojokHadiah = (e) => {
    e.preventDefault();
    const objIndex = dataPojokHadiah.findIndex(
      (obj) => obj._id == pojokHadiahId
    );
    dataPojokHadiah[objIndex].channelType = singlePojokHadiah.channelType;
    dataPojokHadiah[objIndex].channelName = singlePojokHadiah.channelName;
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
    dispatch(setIsPojokHadiahEdit(false));
  };

  //console.log(singlePojokHadiah);

  return (
    <>
      {isPojokHadiahEdit ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-[400px] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="absolute top-2 right-4 text-xl cursor-pointer"
                  onClick={() => dispatch(setIsPojokHadiahEdit(false))}
                >
                  x
                </div>
                {/*body*/}
                <div className="mt-6 px-6 w-full sm:w-[400px]">
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
                            onChange={(e) =>
                              dispatch(
                                setSinglePojokHadiah({
                                  ...singlePojokHadiah,
                                  channelName: e.target.value,
                                })
                              )
                            }
                          >
                            {singlePojokHadiah.channelType ===
                            "Rekening Bank" ? (
                              <>
                                <option>Bank BCA</option>
                                <option>Bank BNI</option>
                                <option>Bank Mandiri</option>
                                <option>Bank BRI</option>
                                <option>Lainnya</option>
                              </>
                            ) : (
                              <>
                                <option>DANA</option>
                                <option>OVO</option>
                              </>
                            )}
                          </select>
                        </div>
                      )}
                      {singlePojokHadiah.channelName === "Lainnya" && (
                        <div className="mb-4 w-full">
                          <label for="name" className="form__label">
                            Upload Logo Bank / e-Wallet <em>(opsional)</em>
                          </label>
                          <input
                            type="file"
                            name="name"
                            className="form__input pl-2"
                            value={singlePojokHadiah.image}
                            onChange={(e) =>
                              dispatch(
                                setSinglePojokHadiah({
                                  ...singlePojokHadiah,
                                  image: e.target.files[0],
                                })
                              )
                            }
                          />
                        </div>
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
                          {loadingUpdate ? <Spinner /> : "Update Channel"}
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
      ) : null}
    </>
  );
}

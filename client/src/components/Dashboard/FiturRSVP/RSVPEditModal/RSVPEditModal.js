import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import {
  setIsRSVPEdit,
  setShowRSVPModal,
  setSingleRSVP,
} from "../../../../actions/layoutActions";
import Spinner from "../../../Spinner";
import RSVPForm from "../RSVPForm/RSVPForm";

export default function RSVPEditModal({ data, dataRSVP }) {
  const dispatch = useDispatch();
  const { RSVPId, isRSVPEdit, isRSVPAdd, singleRSVP, showRSVPModal } =
    useSelector((state) => state.dashboard);
  const { loading: loadingUpdate, success: successUpdate } = useSelector(
    (state) => state.invitationUpdate
  );

  const closeModal = () => {
    dispatch(setShowRSVPModal(false));
  };

  useEffect(() => {
    if (singleRSVP.confirmation !== "Hadir") {
      dispatch(setSingleRSVP({ ...singleRSVP, attendees: 0 }));
    }
  }, [singleRSVP.confirmation]);

  const updateRSVP = (e) => {
    if (isRSVPEdit) {
      e.preventDefault();
      const objIndex = dataRSVP.findIndex((obj) => obj._id == RSVPId);
      dataRSVP[objIndex].name = singleRSVP.name;
      dataRSVP[objIndex].confirmation = singleRSVP.confirmation;
      dataRSVP[objIndex].attendees = singleRSVP.attendees;

      dispatch(
        updateInvitationAction({
          ...data,
          id: data?._id,
          rsvp: dataRSVP,
        })
      );
      closeModal();
    } else {
      e.preventDefault();
      dispatch(
        updateInvitationAction(
          {
            ...data,
            id: data?._id,
            rsvp: [
              ...data.rsvp,
              {
                name: singleRSVP.name,
                confirmation: singleRSVP.confirmation,
                attendees: singleRSVP.attendees,
              },
            ],
          },
          true
        )
      );

      closeModal();
    }
  };

  return (
    <>
      {showRSVPModal && (
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
                  <form onSubmit={updateRSVP}>
                    <input
                      className="form__input mb-4"
                      type="text"
                      placeholder="Nama"
                      value={singleRSVP?.name}
                      onChange={(e) =>
                        dispatch(
                          setSingleRSVP({ ...singleRSVP, name: e.target.value })
                        )
                      }
                    />
                    <select
                      className="form__input mb-4"
                      value={singleRSVP?.confirmation}
                      onChange={(e) =>
                        dispatch(
                          setSingleRSVP({
                            ...singleRSVP,
                            confirmation: e.target.value,
                          })
                        )
                      }
                    >
                      <option>Hadir</option>
                      <option>Tidak Hadir</option>
                      <option>Ragu-ragu</option>
                    </select>
                    {singleRSVP.confirmation === "Hadir" && (
                      <select
                        className="form__input mb-4"
                        type="number"
                        placeholder="Pilih"
                        value={singleRSVP?.attendees}
                        onChange={(e) =>
                          dispatch(
                            setSingleRSVP({
                              ...singleRSVP,
                              attendees: parseInt(e.target.value),
                            })
                          )
                        }
                      >
                        <option value={0}>Pilih Jumlah Hadir</option>
                        {[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20,
                        ].map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    )}
                    <div className="flex justify-center">
                      <button
                        className="primary__button mb-4"
                        onClick={updateRSVP}
                      >
                        {isRSVPEdit ? "Update" : "Tambah RSVP"}
                      </button>
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

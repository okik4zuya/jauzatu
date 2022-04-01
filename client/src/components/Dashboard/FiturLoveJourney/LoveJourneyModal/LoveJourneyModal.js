import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import { setShowLoveJourneyModal } from "../../../../actions/layoutActions";

export default function LoveJourneyModal({ data, showButton }) {
  const dispatch = useDispatch();
  const [singleLoveJourney, setSingleLoveJourney] = useState({
    title: "",
    text: "",
  });
  const { showLoveJourneyModal } = useSelector((state) => state.dashboard);

  const updateLoveJourney = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        loveJourney: [...data?.loveJourney, singleLoveJourney],
      })
    );
    setSingleLoveJourney({ title: "", text: "" });
    dispatch(setShowLoveJourneyModal(false));
  };

  return (
    <>
      {showButton && (
        <div className="grid place-items-center">
          <button
            className="primary__button"
            type="button"
            onClick={() => dispatch(setShowLoveJourneyModal(true))}
          >
            Tambah Cerita
          </button>
        </div>
      )}

      {showLoveJourneyModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-[400px] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="absolute top-2 right-4 text-xl cursor-pointer"
                  onClick={() => dispatch(setShowLoveJourneyModal(false))}
                >
                  x
                </div>
                {/*body*/}
                <div className="mt-6 px-6 w-full sm:w-[400px]">
                  <form>
                    <div className="mb-4 w-full">
                      <label for="name" className="form__label">
                        Judul
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form__input"
                        placeholder=""
                        value={singleLoveJourney.title}
                        onChange={(e) =>
                          setSingleLoveJourney({
                            ...singleLoveJourney,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label for="name" className="form__label">
                        Cerita
                      </label>
                      <textarea
                        type="textarea"
                        wrap="hard"
                        name="name"
                        className="form__input h-24 text-left"
                        placeholder=""
                        value={singleLoveJourney.text}
                        onChange={(e) =>
                          setSingleLoveJourney({
                            ...singleLoveJourney,
                            text: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid place-items-center mt-4 ">
                      <button
                        type="submit"
                        className="primary__button"
                        onClick={updateLoveJourney}
                      >
                        Tambah Cerita
                      </button>
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

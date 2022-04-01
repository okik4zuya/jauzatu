import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import {
  setIsLoveJourneyEdit,
  setSingleLoveJourney,
} from "../../../../actions/layoutActions";

export default function LoveJourneyModalEdit({ data }) {
  const dispatch = useDispatch();
  const [dataLoveJourney, setDataLoveJourney] = useState(data?.loveJourney);

  const { isLoveJourneyEdit, singleLoveJourney, loveJourneyId } = useSelector(
    (state) => state.dashboard
  );

  const updateLoveJourney = (e) => {
    e.preventDefault();
    const objIndex = dataLoveJourney.findIndex(
      (obj) => obj._id == loveJourneyId
    );
    dataLoveJourney[objIndex].title = singleLoveJourney.title;
    dataLoveJourney[objIndex].text = singleLoveJourney.text;
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        loveJourney: dataLoveJourney,
      })
    );
    dispatch(setIsLoveJourneyEdit(false));
  };

  return (
    <>
      {isLoveJourneyEdit ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-[400px] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="absolute top-2 right-4 text-xl cursor-pointer"
                  onClick={() => dispatch(setIsLoveJourneyEdit(false))}
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
                          dispatch(
                            setSingleLoveJourney({
                              ...singleLoveJourney,
                              title: e.target.value,
                            })
                          )
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
                          dispatch(
                            setSingleLoveJourney({
                              ...singleLoveJourney,
                              text: e.target.value,
                            })
                          )
                        }
                      />
                    </div>
                    <div className="grid place-items-center mt-4 ">
                      <div className="flex">
                        <button
                          className="secondary__button"
                          onClick={() => dispatch(setIsLoveJourneyEdit(false))}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="primary__button"
                          onClick={updateLoveJourney}
                        >
                          Update
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

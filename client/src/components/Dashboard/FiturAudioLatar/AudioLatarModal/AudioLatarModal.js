import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import { setShowAudioLatarModal } from "../../../../actions/layoutActions";
import { musicList } from "../musicList";

export default function AudioLatarModal({ data }) {
  const dispatch = useDispatch();
  const [tempAudio, setTempAudio] = useState({
    title: data.dataFitur.audioLatar.title,
    artist: data.dataFitur.audioLatar.artist,
    url: data.dataFitur.audioLatar.url,
  });
  const { showAudioLatarModal } = useSelector((state) => state.dashboard);

  const closeModal = () => {
    dispatch(setShowAudioLatarModal(false));
  };

  const updateAudioLatar = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        dataFitur: {
          ...data?.dataFitur,
          audioLatar: tempAudio,
        },
      })
    );
    dispatch(setShowAudioLatarModal(false));
  };

  console.log(musicList.map((item) => item.title));
  return (
    <>
      {showAudioLatarModal && (
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
                  <form onSubmit={updateAudioLatar}>
                    <div className="mb-4 w-full">
                      <label className="form__label">Judul</label>
                      <input
                        className="form__input py-2 mt-2"
                        placeholder="Judul"
                        type="text"
                        value={tempAudio.title}
                        onChange={(e) =>
                          setTempAudio({ ...tempAudio, title: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label className="form__label">Penyanyi</label>
                      <input
                        className="form__input py-2 mt-2"
                        placeholder="Penyanyi"
                        type="text"
                        value={tempAudio.artist}
                        onChange={(e) =>
                          setTempAudio({ ...tempAudio, artist: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label className="form__label">URL Audio</label>
                      <input
                        className="form__input py-2 mt-2"
                        placeholder="contoh: https://res.cloudinary.com/audio_pilihan.mp3"
                        type="text"
                        value={tempAudio.url}
                        onChange={(e) =>
                          setTempAudio({ ...tempAudio, url: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid place-items-center mt-4">
                      <button
                        type="submit"
                        className="primary__button"
                        onClick={updateAudioLatar}
                      >
                        Set Audio
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

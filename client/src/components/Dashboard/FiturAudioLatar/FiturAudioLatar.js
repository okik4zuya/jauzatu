import FrameDashboard from "../FrameDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import AlertSuccess from "../../AlertSuccess";
import Spinner from "../../Spinner";
import { musicList } from "./musicList";
import { AudioLatarList } from "../../";

export default function FiturAudioLatar({ data }) {
  const dispatch = useDispatch();
  const [openLainnya, setOpenLainnya] = useState(false);
  const [tempAudioLatar, setTempAudioLatar] = useState({
    title: data.dataFitur.audioLatar.title,
    audioLatar: data.dataFitur.audioLatar.artist,
    url: data.dataFitur.audioLatar.url,
  });
  const [isChecked, setIsChecked] = useState(data?.fitur.audioLatar);
  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;

  useEffect(() => {
    if (tempAudioLatar.title === "Lainnya") {
      setOpenLainnya(true);
      //setTempAudioLatar("");
    } else {
      setOpenLainnya(false);
    }
  }, [tempAudioLatar.title]);

  const updateHandler = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,

        fitur: {
          ...data.fitur,
          audioLatar: !isChecked,
        },
      })
    );
  };

  const setAudioLatar = (e) => {
    e.preventDefault();
    setTempAudioLatar({
      title: e.target.value,
      url: musicList.filter((item) => item.title == tempAudioLatar.title)[0]
        .url,
    });
  };
  const updateAudioLatar = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,

        dataFitur: {
          ...data.dataFitur,
          audioLatar: tempAudioLatar,
        },
      })
    );
  };

  // console.log(
  //   musicList.filter((item) => item.title == tempAudioLatar.title)[0].url
  // );

  console.log(data.dataFitur);
  console.log(`tempAudioLatar: ${tempAudioLatar.title}`);
  console.log(`audiolatar: ${data?.fitur.audioLatar}`);
  console.log(`openLainnya: ${openLainnya}`);
  return (
    <FrameDashboard title="Audio Latar">
      <div>
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Fitur Audio Latar</div>
          {loadingUpdate && <Spinner />}
          <div className="mr-2">
            {data.fitur.audioLatar ? "Aktif" : "Tidak Aktif"}
          </div>
          <label
            for="toggle-example"
            className="flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="toggle-example"
              className="sr-only"
              checked={isChecked}
              onChange={updateHandler}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
          </label>
        </div>
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Custom Audio</div>
          {loadingUpdate && <Spinner />}
          <div className="mr-2">{data.fitur.audioLatar ? "Ya" : "Tidak"}</div>
          <label
            for="toggle-example"
            className="flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="toggle-example"
              className="sr-only"
              checked={isChecked}
              onChange={updateHandler}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
          </label>
        </div>
      </div>
      {isChecked && (
        <div className="mt-6">
          <div className="bg-white rounded-lg w-full  shadow-lg pt-4 pb-4">
            <AudioLatarList
              data={data}
              dataAudioLatar={data.dataFitur.audioLatar}
              musicList={musicList}
            />
            <div className="mt-6 px-6 py-6 w-full sm:w-[400px]">
              <form>
                <div className="px-6">
                  <div className="mb-4 w-full">
                    <select
                      type="text"
                      name="name"
                      className="form__select"
                      value={tempAudioLatar.title}
                      onChange={setAudioLatar}
                    >
                      <>
                        {musicList.map((item) => {
                          return <option>{item.title}</option>;
                        })}
                      </>
                    </select>
                  </div>

                  {openLainnya === true && (
                    <>
                      <div className="mb-4 w-full">
                        <label for="name" className="form__label">
                          URL Lagu Custom
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form__input"
                          placeholder="contoh: https://urllagu.com/lagu.mp3"
                          // value={singlePojokHadiah.image}
                          // onChange={(e) =>
                          //   dispatch(
                          //     setSinglePojokHadiah({
                          //       ...singlePojokHadiah,
                          //       image: e.target.value,
                          //     })
                          //   )
                          // }
                        />
                      </div>
                    </>
                  )}

                  <div className="grid place-items-center">
                    <button
                      type="submit"
                      className="primary__button"
                      onClick={updateAudioLatar}
                    >
                      {loadingUpdate ? <Spinner /> : "Set Lagu"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </FrameDashboard>
  );
}

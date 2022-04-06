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
  const [isCustom, setIsCustom] = useState(data?.dataFitur.isAudioLatarCustom);
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
  const setCustom = (e) => {
    e.preventDefault();
    setIsCustom(!isCustom);
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,

        dataFitur: {
          ...data.dataFitur,
          isAudioLatarCustom: !isCustom,
          audioLatar: {
            title: "Custom",
            artist: "Custom",
            url: "",
          },
        },
      })
    );
  };

  console.log(data.dataFitur);
  console.log(`tempAudioLatar: ${tempAudioLatar.title}`);
  console.log(`audiolatar: ${data?.fitur.audioLatar}`);
  console.log(`openLainnya: ${openLainnya}`);
  console.log(`custom: ${data.dataFitur.isAudioLatarCustom}`);

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
            for="fitur-audio-latar"
            className="flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="fitur-audio-latar"
              className="sr-only"
              checked={isChecked}
              onChange={updateHandler}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
          </label>
        </div>
        {isChecked && (
          <div className="px-6 flex mt-4 mb-4 items-center justify-center">
            <div className="mr-2 flex-1">Custom Audio</div>
            {loadingUpdate && <Spinner />}
            <div className="mr-2">
              {data.dataFitur.isAudioLatarCustom ? "Ya" : "Tidak"}
            </div>
            <label
              for="is-custom"
              className="flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="is-custom"
                className="sr-only"
                checked={isCustom}
                onChange={setCustom}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
            </label>
          </div>
        )}
      </div>
      {isChecked && (
        <div className="mt-6">
          <div className="bg-white rounded-lg w-full  shadow-lg pt-4 pb-4">
            <AudioLatarList
              data={data}
              dataAudioLatar={data.dataFitur.audioLatar}
              musicList={musicList}
            />
          </div>
        </div>
      )}
    </FrameDashboard>
  );
}

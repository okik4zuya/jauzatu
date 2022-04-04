import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { updateInvitationAction } from "../../../../../actions/invitationActions";

export default function AudioLatarItem({
  data,
  dataAudioLatar,
  title,
  artist,
  url,
}) {
  const dispatch = useDispatch();
  const { loading: loadingUpdate, success: successUpdate } = useSelector(
    (state) => state.dashboard
  );

  const updateAudioLatar = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        dataFitur: {
          ...data?.dataFitur,
          audioLatar: {
            title,
            artist,
            url,
          },
        },
      })
    );
  };
  console.log(dataAudioLatar);
  //console.log(data);

  return (
    <>
      <div className="rounded-lg overflow-hidden my-4 shadow-lg relative">
        <div className="font-bold bg-gray-100 px-6 pt-2">{title}</div>
        <div className="bg-gray-100 px-6 pb-2">
          <em>{artist}</em>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex">
          <div className="grid place-items-center mr-2 cursor-pointer text-gray-500">
            <FaPlay />
          </div>
          <div
            className={`${
              dataAudioLatar.title === title && dataAudioLatar.artist === artist
                ? "bg-gray-200 text-gold"
                : "bg-gold text-white"
            } rounded-xl px-4 py-1  font-bold text-xs cursor-pointer`}
            onClick={updateAudioLatar}
          >
            {dataAudioLatar.title === title && dataAudioLatar.artist === artist
              ? "Terpilih"
              : "Pilih"}
          </div>
        </div>
      </div>
    </>
  );
}

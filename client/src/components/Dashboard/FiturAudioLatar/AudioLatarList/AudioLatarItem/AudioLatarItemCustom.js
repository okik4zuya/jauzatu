import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { updateInvitationAction } from "../../../../../actions/invitationActions";
import { useState } from "react";
import { AudioLatarModal } from "../../../../";
import { setShowAudioLatarModal } from "../../../../../actions/layoutActions";

export default function AudioLatarItemCustom({
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
  const { showAudioLatarModal } = useSelector((state) => state.dashboard);

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
            onClick={() => dispatch(setShowAudioLatarModal(true))}
          >
            {dataAudioLatar.title === title && dataAudioLatar.artist === artist
              ? "Edit"
              : "Set"}
          </div>
        </div>
      </div>
      {showAudioLatarModal && <AudioLatarModal data={data} />}
    </>
  );
}

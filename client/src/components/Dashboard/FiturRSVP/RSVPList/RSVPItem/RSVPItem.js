import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/id";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { DeleteConfirmation } from "../../../../";
import {
  setIsRSVPAdd,
  setIsRSVPEdit,
  setRSVPId,
  setShowDeleteConfirmation,
  setShowRSVPModal,
  setSingleRSVP,
} from "../../../../../actions/layoutActions";
import { updateInvitationAction } from "../../../../../actions/invitationActions";
import { RSVPEditModal } from "../../../../";

export default function RSVPItem({
  id,
  data,
  dataRSVP,
  name,
  confirmation,
  attendees,
  createdAt,
}) {
  const dispatch = useDispatch();
  const [index, setIndex] = useState("");
  const [badge, setBadge] = useState("");
  const { RSVPId, isRSVPEdit, isRSVPAdd, singleRSVP } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    const objIndex = dataRSVP.findIndex((obj) => obj._id == id);
    setIndex(objIndex % 2);
    switch (confirmation) {
      case "Hadir":
        setBadge("badge__gold");
        break;
      case "Tidak Hadir":
        setBadge("badge__gray__200");
        break;
      case "Ragu-ragu":
        setBadge("badge__yellow__200");
        break;

      default:
        break;
    }
  }, [dataRSVP]);

  const openDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(true));
    dispatch(setRSVPId(id));
  };
  const closeDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(false));
  };

  const openEditModal = () => {
    dispatch(setRSVPId(id));
    dispatch(setIsRSVPEdit(true));
    dispatch(setShowRSVPModal(true));
    dispatch(
      setSingleRSVP({
        name,
        confirmation,
        attendees,
      })
    );
  };

  const deleteRSVP = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        rsvp: dataRSVP.filter((item) => item._id != RSVPId),
      })
    );
    closeDeleteConfirmation();
  };

  return (
    <>
      <div className={`${index === 0 ? "bg-white" : "bg-gray-50"}`}>
        <div className={`pt-2 px-4 flex text-gray-800 items-center `}>
          <div className="w-[50%] flex">
            <div className="">{name}</div>
            <div className=" flex items-center">
              <div className={`${badge}`}>{confirmation}</div>
            </div>
          </div>

          <div className="w-[30%] text-center">{attendees}</div>
          <div className="w-[20%] text-center flex justify-end text-gray-500 pr-2">
            <div className="mx-1 cursor-pointer" onClick={openEditModal}>
              <FaEdit />
            </div>
            <RSVPEditModal data={data} dataRSVP={data.rsvp} />
            <div
              className="mx-1 cursor-pointer"
              onClick={openDeleteConfirmation}
            >
              <FaTrashAlt />
            </div>
            <DeleteConfirmation
              cancel={closeDeleteConfirmation}
              ok={deleteRSVP}
            >
              Anda yakin akan menghapus RSVP ini?
            </DeleteConfirmation>
          </div>
        </div>
        <div className="text-xs text-gray-500 px-4 pb-2">
          {moment(createdAt).fromNow()}
        </div>
      </div>
    </>
  );
}

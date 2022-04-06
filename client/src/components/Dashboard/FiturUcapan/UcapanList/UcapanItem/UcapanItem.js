import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/id";
import { FaForward, FaHeart, FaReply, FaTrashAlt } from "react-icons/fa";
import { UcapanReply, UcapanReplyForm } from "../../../../";
import { updateInvitationAction } from "../../../../../actions/invitationActions";
import {
  setShowDeleteConfirmation,
  setShowUcapanReplyForm,
  setUcapanId,
} from "../../../../../actions/layoutActions";
import DeleteConfirmation from "../../../../DeleteConfirmation";

export default function UcapanItem({
  id,
  data,
  dataUcapan,
  name,
  text,
  replyName,
  replyText,
  reply,
  like,
  createdAt,
}) {
  const dispatch = useDispatch();
  const { singleUcapan, ucapanId, showUcapanReplyForm } = useSelector(
    (state) => state.dashboard
  );

  const openDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(true));
    dispatch(setUcapanId(id));
  };

  const closeDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(false));
  };

  const showReplyForm = () => {
    dispatch(setShowUcapanReplyForm(true));
    dispatch(setUcapanId(id));
  };

  const deleteUcapan = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        ucapan: dataUcapan.filter((item) => item._id != ucapanId),
      })
    );
    closeDeleteConfirmation();
  };
  console.log(reply);

  return (
    <>
      <div className="relative w-[90%] bg-white rounded-r-xl rounded-b-xl   mt-2 mb-2 ml-6 before:content-[''] before:w-0 before:h-0 before:absolute before:-left-[20px] before:top-0 before:border-[10px] before:border-r-white before:border-t-white before:border-l-transparent before:border-b-transparent">
        <div className="pt-2 px-4">
          <div className="font-bold">{name}</div>
          <div className="mb-4">{text}</div>
        </div>
        <div className="flex   w-full py-2 px-4 bg-gray-50 rounded-b-xl ">
          <div className="flex-1 text-gray-600 text-sm">
            {moment(createdAt).fromNow()}
          </div>
          {/* <div className="flex items-center ">
            <div
              className={`${
                isLiked ? "text-red-500" : "text-gray-500"
              } cursor-pointer `}
              onClick={() => setIsLiked(true)}
            >
              <FaHeart />
            </div>
            <div className="ml-1 mr-4 text-sm font-semibold">{like} Like</div>
          </div> */}
          <div className="flex items-center">
            <div
              className="text-gray-500 mx-2 cursor-pointer"
              onClick={showReplyForm}
            >
              <FaReply />
            </div>

            <div
              className="text-gray-500 mx-2 cursor-pointer"
              onClick={openDeleteConfirmation}
            >
              <FaTrashAlt />
            </div>
            <DeleteConfirmation
              cancel={closeDeleteConfirmation}
              ok={deleteUcapan}
            >
              Anda yakin akan menghapus ucapan ini?
            </DeleteConfirmation>
          </div>
        </div>
      </div>

      <>
        {reply.map((item) => (
          <div className="ml-6">
            <UcapanReply
              replyName={item.name}
              replyText={item.text}
              createdAt={item.createdAt}
            />
          </div>
        ))}
      </>
      {showUcapanReplyForm && id === ucapanId ? (
        <div className="ml-6">
          <UcapanReplyForm id={id} data={data} dataUcapan={dataUcapan} />
        </div>
      ) : null}
    </>
  );
}

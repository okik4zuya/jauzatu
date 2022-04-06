import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../../../actions/invitationActions";
import { setShowUcapanReplyForm } from "../../../../../../actions/layoutActions";
import { IoMdSend } from "react-icons/io";

export default function UcapanReplyForm({ id, data, dataUcapan }) {
  const dispatch = useDispatch();
  const [tempReply, setTempReply] = useState({
    name: "",
    text: "",
  });
  const { ucapanId } = useSelector((state) => state.dashboard);
  const closeReplyForm = () => {
    dispatch(setShowUcapanReplyForm(false));
  };

  const submitReply = (e) => {
    e.preventDefault();
    const objIndex = dataUcapan.findIndex((obj) => obj._id == ucapanId);
    dataUcapan[objIndex].reply = [...dataUcapan[objIndex].reply, tempReply];

    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        ucapan: dataUcapan,
      })
    );
    setTempReply({
      name: "",
      text: "",
    });
  };

  console.log(tempReply);

  return (
    <>
      <div className="relative w-[90%] bg-white rounded-t-xl rounded-b-xl  mt-2 mb-2 ml-6 ">
        <div className="py-4 px-4">
          <form>
            {/* <input
              type="text"
              className="form__input border-none mb-2"
              placeholder="Nama"
              onChange={(e) =>
                setTempReply({ ...tempReply, name: e.target.value })
              }
            /> */}
            <div className="flex">
              <textarea
                type="text"
                className="form__input border-none resize-none h-[90px]"
                placeholder="Balas ucapan..."
                value={tempReply.text}
                onChange={(e) =>
                  setTempReply({ ...tempReply, text: e.target.value })
                }
              />
              <div className="grid place-items-center">
                <div
                  className="grid place-items-center h-[40px] aspect-square  cursor-pointer text-gray-500"
                  onClick={submitReply}
                >
                  <IoMdSend size={30} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

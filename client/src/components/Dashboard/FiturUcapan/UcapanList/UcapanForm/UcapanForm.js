import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../../actions/invitationActions";
import { setSingleUcapan } from "../../../../../actions/layoutActions";

export default function UcapanForm({ data }) {
  const dispatch = useDispatch();
  const { singleUcapan } = useSelector((state) => state.dashboard);

  const submitUcapan = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction(
        {
          ...data,
          id: data?._id,
          ucapan: [
            ...data.ucapan,
            {
              name: singleUcapan.name,
              text: singleUcapan.text,
              like: singleUcapan.like,
              reply: singleUcapan.reply,
            },
          ],
        },
        true
      )
    );
    // dispatch(setSingleUcapan({...data.ucapan, name: "", text: "" }));
  };

  // console.log(data.ucapan);
  // console.log(`name: ${singleUcapan?.name}`);
  // console.log(`text: ${singleUcapan?.text}`);

  return (
    <>
      <div>
        <form onSubmit={submitUcapan}>
          <div>
            <input
              type="text"
              className="form__input mb-2"
              placeholder="Nama"
              onChange={(e) =>
                dispatch(
                  setSingleUcapan({ ...singleUcapan, name: e.target.value })
                )
              }
            />
          </div>
          <div>
            <textarea
              type="text"
              className="form__input h-[90px] resize-none"
              placeholder="Pesan"
              onChange={(e) =>
                dispatch(
                  setSingleUcapan({ ...singleUcapan, text: e.target.value })
                )
              }
            />
          </div>
          <div className="grid place-items-center mt-2">
            <button className="primary__button" onClick={submitUcapan}>
              Kirim
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

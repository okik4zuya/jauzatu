import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import { setSingleRSVP } from "../../../../actions/layoutActions";

export default function RSVPForm({ data }) {
  const dispatch = useDispatch();
  const { singleRSVP } = useSelector((state) => state.dashboard);

  const submitRSVP = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction(
        {
          ...data,
          id: data?._id,
          rsvp: [
            ...data.rsvp,
            {
              name: singleRSVP.name,
              confirmation: singleRSVP.confirmation,
              attendees: singleRSVP.attendees,
            },
          ],
        },
        true
      )
    );
  };

  console.log(singleRSVP);
  console.log(data.rsvp);

  return (
    <>
      <div className="px-6">
        <form onSubmit={submitRSVP}>
          <input
            className="form__input mb-4"
            type="text"
            placeholder="Nama"
            value={singleRSVP?.name}
            onChange={(e) =>
              dispatch(setSingleRSVP({ ...singleRSVP, name: e.target.value }))
            }
          />
          <select
            className="form__input mb-4"
            value={singleRSVP?.confirmation}
            onChange={(e) =>
              dispatch(
                setSingleRSVP({ ...singleRSVP, confirmation: e.target.value })
              )
            }
          >
            <option>Hadir</option>
            <option>Tidak Hadir</option>
            <option>Ragu-ragu</option>
          </select>
          {singleRSVP.confirmation === "Hadir" && (
            <select
              className="form__input mb-4"
              type="number"
              placeholder="Pilih"
              value={singleRSVP?.attendees}
              onChange={(e) =>
                dispatch(
                  setSingleRSVP({
                    ...singleRSVP,
                    attendees: parseInt(e.target.value),
                  })
                )
              }
            >
              <option value={0}>Pilih Jumlah Hadir</option>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
          <div className="flex justify-center">
            <button className="primary__button mb-4" onClick={submitRSVP}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

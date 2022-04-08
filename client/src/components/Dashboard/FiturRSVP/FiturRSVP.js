import FrameDashboard from "../FrameDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import AlertSuccess from "../../AlertSuccess";
import Spinner from "../../Spinner";
import { RSVPList, RSVPOverview, RSVPForm } from "../../";
import {
  setIsRSVPAdd,
  setIsRSVPEdit,
  setRSVPId,
  setSearchRSVP,
  setShowRSVPModal,
  setSingleRSVP,
} from "../../../actions/layoutActions";

export default function FiturRSVP({ data }) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(data?.fitur.rsvp);

  const { loading: loadingUpdate, success: successUpdate } = useSelector(
    (state) => state.invitationUpdate
  );
  const { isRSVPEdit, RSVPId, singleRSVP, searchRSVP } = useSelector(
    (state) => state.dashboard
  );

  console.log(searchRSVP);
  const updateHandler = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,

        fitur: {
          ...data.fitur,
          rsvp: !isChecked,
        },
      })
    );
  };
  const openModal = () => {
    dispatch(setIsRSVPEdit(false));
    dispatch(setShowRSVPModal(true));
    dispatch(
      setSingleRSVP({
        name: "",
        confirmation: "Hadir",
        attendees: 0,
      })
    );
  };

  return (
    <FrameDashboard title="RSVP">
      <div>
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Fitur RSVP</div>
          {loadingUpdate && <Spinner />}
          <div className="mr-2">
            {data.fitur.rsvp ? "Aktif" : "Tidak Aktif"}
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
      </div>
      {isChecked && (
        <div className="mt-6">
          <div className="p-2">
            <RSVPOverview data={data} dataRSVP={data.rsvp} />
          </div>

          <div className=" flex items-center justify-center mt-6">
            <div className="w-1/3 mr-4">
              <select
                type="text"
                className="form__select "
                onChange={(e) => dispatch(setSearchRSVP(e.target.value))}
              >
                <option value="">Semua</option>
                <option>Hadir</option>
                <option>Tidak Hadir</option>
                <option>Ragu-ragu</option>
              </select>
            </div>
            <div className="flex items-center ">
              <button className="primary__button" onClick={openModal}>
                Tambah RSVP
              </button>
            </div>
          </div>

          <div className=" pt-4 pb-4">
            <RSVPList data={data} dataRSVP={data.rsvp} />
            {/* <UcapanList data={data} dataUcapan={data.ucapan} /> */}
          </div>
        </div>
      )}
    </FrameDashboard>
  );
}

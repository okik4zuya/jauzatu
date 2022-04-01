import FrameDashboard from "../FrameDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import AlertSuccess from "../../AlertSuccess";
import Spinner from "../../Spinner";

export default function FiturUcapan({ data }) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(data?.fitur.ucapan);
  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;
  const updateHandler = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,

        fitur: {
          ...data.fitur,
          ucapan: !isChecked,
        },
      })
    );
  };

  console.log(`ucapan: ${data?.fitur.ucapan}`);
  return (
    <FrameDashboard title="Ucapan">
      <div>
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Fitur Ucapan</div>
          {loadingUpdate && <Spinner />}
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

          <div className="ml-2">
            {data.fitur.ucapan ? "Aktif" : "Tidak Aktif"}
          </div>
        </div>
        {successUpdate && <AlertSuccess>Update berhasil!</AlertSuccess>}
      </div>
    </FrameDashboard>
  );
}

import FrameDashboard from "../FrameDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";

import Spinner from "../../Spinner";
import { GaleriList, GaleriModal } from "../..";

export default function FiturGaleri({ data }) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(data?.fitur.galeri);
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
          galeri: !isChecked,
        },
      })
    );
  };

  return (
    <FrameDashboard title="Galeri">
      <div>
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Fitur Galeri</div>
          {loadingUpdate && <Spinner />}
          <div className="mr-2">
            {data.fitur.galeri ? "Aktif" : "Tidak Aktif"}
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
        {isChecked && (
          <div className="mt-6">
            <div className="bg-white rounded-lg w-full  shadow-lg pt-4 pb-4">
              <GaleriModal data={data} dataGaleri={data.galeri} showButton />

              <GaleriList data={data} dataGaleri={data.galeri} />
            </div>
          </div>
        )}
      </div>
    </FrameDashboard>
  );
}

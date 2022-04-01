import FrameDashboard from "../FrameDashboard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import AlertSuccess from "../../AlertSuccess";
import Spinner from "../../Spinner";
import { LoveJourneyList, LoveJourneyModal } from "../../";

export default function FiturLoveJourney({ data }) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(data?.fitur.loveJourney);
  const [singleLoveJourney, setSingleLoveJourney] = useState({
    title: "",
    text: "",
  });

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
          loveJourney: !isChecked,
        },
      })
    );
  };

  return (
    <FrameDashboard title="Love Journey">
      <div>
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Fitur Love Journey</div>
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
            {data.fitur.loveJourney ? "Aktif" : "Tidak Aktif"}
          </div>
        </div>
        {isChecked && (
          <div className="mt-6">
            <div className="bg-white rounded-lg w-full  shadow-lg pt-4 pb-4">
              <LoveJourneyModal data={data} showButton />
              {data?.loveJourney ? (
                <LoveJourneyList
                  data={data}
                  dataLoveJourney={data.loveJourney}
                />
              ) : (
                <div className="w-3/4 text-xs text-center mx-auto">
                  Isi form untuk mulai menambah cerita anda!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </FrameDashboard>
  );
}

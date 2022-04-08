import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import AlertSuccess from "../../AlertSuccess";
import CountdownTimer from "../../Features/CountdownTimer/CountdownTimer";
import Spinner from "../../Spinner";
import FrameDashboard from "../FrameDashboard";
import DatePicker from "react-datepicker";
import Countdown from "react-countdown";

import "react-datepicker/dist/react-datepicker.min.css";
import { format, parseISO } from "date-fns";

export default function FiturCountdown({ data }) {
  const [countdownDate, setCountdownDate] = useState(
    data.dataFitur.countdownDate
  );
  const [countdownTime, setCountdownTime] = useState(
    data.dataFitur.countdownTime
  );
  const [formattedDate, setFormattedDate] = useState();
  const [countdownDateTime, setCountdownDateTime] = useState();

  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(data?.fitur.countdown);
  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;

  console.log(countdownDate);
  console.log(countdownTime);

  const updateHandler = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,

        fitur: {
          ...data.fitur,
          countdown: !isChecked,
        },
      })
    );
  };
  const updateWaktuAkad = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        dataFitur: {
          ...data.dataFitur,
          countdownDate: countdownDate,
          countdownTime: countdownTime,
        },
      })
    );
  };

  useEffect(() => {
    //setCountdownDate(data.dataFitur.countdownDate);
    //setFormattedDate(parseISO(countdownDate));
    setFormattedDate(format(parseISO(countdownDate), "yyyy-MM-dd"));
    setCountdownDateTime(
      `${format(parseISO(countdownDate), "MMM dd yyyy ")} ${countdownTime}`
    );
  }, [successUpdate]);

  console.log(countdownDateTime);
  console.log(`countdownDate: ${countdownDate}`);
  console.log(`countdownTime: ${countdownTime}`);
  console.log(`datafitur.countdownDate: ${data.dataFitur.countdownDate}`);
  console.log(`datafitur.countdownTime: ${data.dataFitur.countdownTime}`);

  return (
    <FrameDashboard title="Countdown">
      <div className="">
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Fitur Countdown</div>
          {loadingUpdate && <Spinner />}
          <div className="mr-2">
            {data.fitur.countdown ? "Aktif" : "Tidak Aktif"}
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

        {/* <div className="mt-6">
          <div className="text-center mt-4 mb-4">Atur Waktu Countdown</div>

          <div className="px-6">
            <input
              type="date"
              className=" form__input mb-4"
              placeholder="Select date"
              value={formattedDate}
              onChange={(e) => setCountdownDate(e.target.value)}
            />
            <input
              type="time"
              className=" form__input mb-4"
              placeholder="Select date"
              value={countdownTime}
              onChange={(e) => setCountdownTime(e.target.value.toISOString())}
            />
          </div>
          <div className="grid place-items-center">
            <button className="primary__button" onClick={updateWaktuAkad}>
              Set
            </button>
          </div>
        </div> */}
        {successUpdate && <AlertSuccess>Update berhasil!</AlertSuccess>}

        <div className="text-center mt-4 font-bold text-xl">Preview</div>
        <div>{/* <Countdown date={Date.now() + 20000} /> */}</div>
        <CountdownTimer datetime={"Apr 10 2022, 00:00:00"} />
      </div>
    </FrameDashboard>
  );
}

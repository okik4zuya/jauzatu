import { useEffect, useRef, useState } from "react";

export default function CountdownTimer({ datetime }) {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(datetime).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        setTimer({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, [timer]);

  return (
    <div className="grid place-items-center">
      <div className="flex">
        <div className="flex">
          <div>{timer.days} </div>
          <div>Hari </div>
          <div>:</div>
        </div>
        <div className="flex">
          <div>{timer.hours} </div>
          <div>Jam </div>
          <div>:</div>
        </div>
        <div className="flex">
          <div>{timer.minutes} </div>
          <div>Menit </div>
          <div>:</div>
        </div>
        <div className="flex">
          <div>{timer.seconds} </div>
          <div>Detik </div>
        </div>
      </div>
    </div>
  );
}

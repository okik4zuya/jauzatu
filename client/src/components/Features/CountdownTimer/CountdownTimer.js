import { useEffect, useRef, useState } from "react";
import Card from "./Card/Card";

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
          <Card tick={timer.days} label="Hari" />
        </div>
        <div className="flex">
          <Card tick={timer.hours} label="Jam" />
        </div>
        <div className="flex">
          <Card tick={timer.minutes} label="Menit" />
        </div>
        <div className="flex">
          <Card tick={timer.seconds} label="Detik" />
        </div>
      </div>
    </div>
  );
}

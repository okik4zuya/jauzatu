import { useEffect, useState } from "react";

import { RSVPSingleStat } from "../../../";

export default function RSVPOverview({ data, dataRSVP }) {
  const [stat, setStat] = useState({
    hadir: 0,
    tidakHadir: 0,
    raguRagu: 0,
    jumlahHadir: 0,
  });

  useEffect(() => {
    const hadir = dataRSVP.filter((item) => item.confirmation === "Hadir");
    const tidakHadir = dataRSVP.filter(
      (item) => item.confirmation === "Tidak Hadir"
    );
    const raguRagu = dataRSVP.filter(
      (item) => item.confirmation === "Ragu-ragu"
    );
    const jumlahHadir = dataRSVP
      .filter((item) => item.confirmation === "Hadir")
      .map((item) => item.attendees)
      .reduce((a, b) => a + b, 0);
    setStat({
      hadir: hadir.length,
      tidakHadir: tidakHadir.length,
      raguRagu: raguRagu.length,
      jumlahHadir: jumlahHadir,
    });
  }, [dataRSVP]);

  return (
    <>
      <div className="text-center font-bold text-xl">Overview</div>
      <div className="flex flex-wrap justify-center">
        <RSVPSingleStat title="Konfirmasi Hadir" value={stat.hadir} />
        <RSVPSingleStat title="Jumlah Hadir" value={stat.jumlahHadir} />
        <RSVPSingleStat title="Tidak Hadir" value={stat.tidakHadir} />
        <RSVPSingleStat title="Ragu-ragu" value={stat.raguRagu} />
      </div>
    </>
  );
}

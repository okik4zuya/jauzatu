import React from "react";

export default function RSVPSingleStat({ title, value }) {
  return (
    <div className="bg-gray-50 w-[40%] h-[40%] rounded-lg shadow-lg m-2 overflow-hidden">
      <div className="text-center text-sm bg-gray-100 px-1 py-2 font-semibold">
        {title}
      </div>
      <div className="text-5xl text-center font-bold px-2 py-2">{value}</div>
    </div>
  );
}

import React from "react";

export default function RSVPSingleStat({ title, value }) {
  return (
    <div className="bg-gray-50 w-[40%] h-[40%] rounded-lg shadow-lg m-2 p-4 ">
      <div className="text-center text-sm">{title}</div>
      <div className="text-4xl text-center font-bold">{value}</div>
    </div>
  );
}

import React from "react";

export default function Card({ tick, label }) {
  return (
    <>
      <div className="bg-gray-200 mt-4 mx-1 flex flex-col items-center justify-center p-2 rounded-xl">
        <div className="text-3xl font-bold text-gold ">
          {tick < 10 ? "0" : ""}
          {tick}
        </div>
        <div className="text-sm font-bold">{label}</div>
      </div>
    </>
  );
}

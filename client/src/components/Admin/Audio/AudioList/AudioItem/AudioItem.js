import React from "react";
import { FaEdit, FaPlay, FaTrashAlt } from "react-icons/fa";

export default function AudioItem({ title, artist, url, id }) {
  return (
    <>
      <div className="flex bg-gray-50 rounded-lg shadow-lg py-2 px-4 my-2">
        <div className="flex-1">
          <div className="text-md font-bold">{title}</div>
          <div className="text-sm">
            <em>{artist}</em>
          </div>
        </div>
        <div className="flex items-center text-gray-500">
          <div className="mx-2 cursor-pointer">
            <FaPlay />
          </div>
          <div className="mx-2 cursor-pointer">
            <FaEdit />
          </div>

          <div className="mx-2 cursor-pointer">
            <FaTrashAlt />
          </div>
        </div>
      </div>
    </>
  );
}

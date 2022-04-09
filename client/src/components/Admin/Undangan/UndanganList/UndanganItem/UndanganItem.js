import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/id";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

export default function UndanganItem({
  id,
  user,
  slug,
  tema,
  createdAt,
  updatedAt,
  invitationList,
  userData,
}) {
  console.log(userData.filter((item) => item._id === user)[0].email);
  return (
    <>
      <div className={`my-2 bg-gray-50 shadow-lg rounded-lg overflow-hidden`}>
        <div className="py-2 px-4  flex text-gray-800 ">
          <div className=" w-[30%] text-md font-bold flex flex-1 items-center">
            {slug}
          </div>
          <div className="w-[30%]  text-md text-gray-600 flex flex-1 items-center">
            {tema}
          </div>

          <div className="w-[20%] flex flex-1 justify-start items-center text-gray-500">
            <div className="mr-2 cursor-pointer">
              <FaEdit />
            </div>
            <div className="mr-2 cursor-pointer">
              <FaEye />
            </div>

            <div className="mr-2 cursor-pointer">
              <FaTrashAlt />
            </div>
          </div>
        </div>
        <div className="flex bg-gray-100 py-2 px-4">
          <div className="text-[10px] flex-1">
            Created By: <br />
            <em>{userData.filter((item) => item._id === user)[0].email}</em>
          </div>
          <div className=" text-[10px] flex-1">
            Created At: <br />
            <em>{moment(createdAt).fromNow()}</em>
          </div>
          <div className=" text-[10px] flex-1">
            Last Update: <br />
            <em>{moment(updatedAt).fromNow()}</em>
          </div>
        </div>
      </div>
    </>
  );
}

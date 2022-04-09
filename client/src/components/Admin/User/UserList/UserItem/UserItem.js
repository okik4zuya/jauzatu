import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/id";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

export default function UserItem({
  id,
  userData,
  email,
  accountType,
  createdAt,
}) {
  const [index, setIndex] = useState();
  const [badge, setBadge] = useState("");
  useEffect(() => {
    const objIndex = userData.findIndex((obj) => obj._id == id);
    setIndex(objIndex % 2);
    switch (accountType) {
      case "Silver":
        setBadge("badge__gray__200");
        break;
      case "Gold":
        setBadge("badge__gold");
        break;
      default:
        break;
    }
  }, [userData]);
  return (
    <>
      <div className={`${index === 0 ? "bg-white" : "bg-gray-50"}`}>
        <div className="py-4 px-4 flex text-gray-800 items-center">
          <div className="w-[80%] sm:w-[50%]">
            <div className="text-xs flex">
              <div className="">{email}</div>
              <div className=" flex items-center">
                <div className={`${badge}`}>{accountType}</div>
              </div>
            </div>
            <div className="sm:hidden text-xs text-gray-600">
              {moment(createdAt).fromNow()}
            </div>
          </div>

          <div className="w-[30%] hidden sm:block text-xs text-gray-600">
            {moment(createdAt).fromNow()}
          </div>

          <div className="w-[20%] flex justify-center items-center text-gray-500">
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
      </div>
    </>
  );
}

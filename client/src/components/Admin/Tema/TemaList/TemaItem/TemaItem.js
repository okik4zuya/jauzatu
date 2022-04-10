import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../../actions/invitationActions";
import { Spinner } from "../../../..";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

export default function TemaItem({
  id,
  image,
  title,
  tag,
  description,
  demoLink,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [updated, setUpdated] = useState({
  //   ...data,
  //   id: data?._id,
  //   tema: tema,
  // });

  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;

  // const updateHandler = () => {
  //   dispatch(updateInvitationAction(updated));
  // };

  return (
    <div className=" m-2 w-full sm:w-[175px] rounded-lg overflow-hidden bg-white shadow-lg">
      <img src={image} className="object-cover object-center" />

      <div className="text-center font-bold mt-1">{title}</div>

      <div className="grid place-items-center">
        <div className="flex flex-wrap items-center text-center px-2 mb-2 mt-1">
          {tag.map((tag) => (
            <span className="bg-yellow-100 text-yellow-800 text-[9px] font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 mx-[0.5px] my-[0.5px]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid place-items-center mt-2 py-3 bg-gray-50">
        <div className="flex items-center text-gray-500">
          <div className="mx-2 cursor-pointer">
            <FaEdit />
          </div>
          <div className="mx-2 cursor-pointer">
            <FaEye />
          </div>

          <div className="mx-2 cursor-pointer">
            <FaTrashAlt />
          </div>
        </div>
      </div>
    </div>
  );
}

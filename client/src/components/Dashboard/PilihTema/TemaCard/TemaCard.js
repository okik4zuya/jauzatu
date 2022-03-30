import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import { Spinner } from "../../../";
import { dataTema } from "../dataTema";

export default function TemaCard(props) {
  const { id, gambar, tema, tag, description, demoLink, data } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updated, setUpdated] = useState({
    ...data,
    id: data?._id,
    tema: tema,
  });

  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;

  const updateHandler = () => {
    dispatch(updateInvitationAction(updated));
  };

  return (
    <div className="relative w-full sm:w-[175px] rounded-lg overflow-hidden bg-white shadow-lg">
      <img src={gambar} className="object-cover object-center" />

      <div className="text-center font-bold mt-1">{tema}</div>
      {data?.tema === tema && (
        <div className=" absolute top-2 left-2 bg-green-100 text-green-800 text-[11px] font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mx-[0.5px] my-[0.5px]">
          Tema Saat Ini
        </div>
      )}

      <div className="grid place-items-center">
        <div className="flex flex-wrap items-center text-center px-2 mb-2 mt-1">
          {tag.map((tag) => (
            <span className="bg-yellow-100 text-yellow-800 text-[9px] font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 mx-[0.5px] my-[0.5px]">
              {tag}
            </span>
          ))}
        </div>
        {/* <div className="px-2 text-center text-[11px] mb-2">{description}</div> */}
      </div>

      <div className="grid place-items-center mb-2 mt-1 pt-2 ">
        <div className="flex">
          <a className="secondary__button cursor-pointer" href={demoLink}>
            Demo
          </a>
          <button className="primary__button" onClick={updateHandler}>
            {loadingUpdate ? <Spinner /> : "Pilih"}
          </button>
        </div>
      </div>
    </div>
  );
}

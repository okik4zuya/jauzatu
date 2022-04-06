import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { updateInvitationAction } from "../../../../../actions/invitationActions";
import {
  setGaleriId,
  setShowDeleteConfirmation,
} from "../../../../../actions/layoutActions";
import DeleteConfirmation from "../../../../DeleteConfirmation";

export default function GaleriItem({ data, image, id, dataGaleri }) {
  const dispatch = useDispatch();

  const { showDeleteConfirmation, galeriId } = useSelector(
    (state) => state.dashboard
  );

  const openDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(true));
    dispatch(setGaleriId(id));
  };

  const closeDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(false));
  };
  const deleteGaleri = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        galeri: dataGaleri.filter((item) => item._id != galeriId),
      })
    );
    closeDeleteConfirmation();
  };

  return (
    <div className=" shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex bg-gray-100 pt-2 pl-2 pb-2 pr-2">
        <div className="flex-1">
          Foto {dataGaleri.findIndex((item) => item._id == id) + 1}
        </div>
        {/* <LoveJourneyModalEdit id={id} data={data} /> */}

        <div
          className="px-2 text-gray-500 cursor-pointer"
          // onClick={openEditModal}
        >
          <FaEdit />
        </div>
        <div
          className="px-2 text-gray-500 cursor-pointer"
          onClick={openDeleteConfirmation}
        >
          <FaTrashAlt />
        </div>

        <DeleteConfirmation cancel={closeDeleteConfirmation} ok={deleteGaleri}>
          Anda yakin akan menghapus cerita ini?
        </DeleteConfirmation>
      </div>
      <div className="bg-gray-50">
        <div className="w-full aspect-square  rounded-b-lg overflow-hidden shadow-lg">
          <img src={image} className="w-full h-full object-fit object-cover" />
        </div>
      </div>
    </div>
  );
}

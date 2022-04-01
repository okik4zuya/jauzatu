import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function GaleriItem() {
  return (
    <div className=" shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex bg-gray-100 pt-2 pl-2 pb-2 pr-2">
        <div className="flex-1">Foto 1</div>
        {/* <LoveJourneyModalEdit id={id} data={data} /> */}

        <div
          className="px-2 text-gray-500 cursor-pointer"
          // onClick={openEditModal}
        >
          <FaEdit />
        </div>
        <div
          className="px-2 text-gray-500 cursor-pointer"
          //onClick={openDeleteConfirmation}
        >
          <FaTrashAlt />
        </div>
        {/* <DeleteConfirmation
        cancel={closeDeleteConfirmation}
        ok={deleteLoveJourney}
      >
        Anda yakin akan menghapus cerita ini?
      </DeleteConfirmation> */}
      </div>
      <div className="bg-gray-50 pt-2 pl-4 pb-2 pr-4">Gambar</div>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  setShowDeleteConfirmation,
  setPojokHadiahId,
  setIsPojokHadiahEdit,
  setSinglePojokHadiah,
  setShowPojokHadiahModal,
} from "../../../../../actions/layoutActions";

import { updateInvitationAction } from "../../../../../actions/invitationActions";
import { DeleteConfirmation, PojokHadiahModal } from "../../../../";

export default function PojokHadiahItem({
  id,
  data,
  dataPojokHadiah,
  image,
  name,
  address,
  contact,
  channelType,
  channelName,
  channelNameLainnya,
}) {
  const dispatch = useDispatch();
  const { showDeleteConfirmation, pojokHadiahId, singlePojokHadiah } =
    useSelector((state) => state.dashboard);

  const openDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(true));
    dispatch(setPojokHadiahId(id));
  };

  const closeDeleteConfirmation = () => {
    dispatch(setShowDeleteConfirmation(false));
  };

  const deletePojokHadiah = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        pojokHadiah: dataPojokHadiah.filter(
          (item) => item._id != pojokHadiahId
        ),
      })
    );
    closeDeleteConfirmation();
  };

  const openEditModal = () => {
    dispatch(setIsPojokHadiahEdit(true));
    dispatch(setShowPojokHadiahModal(true));
    dispatch(
      setSinglePojokHadiah({
        channelType: dataPojokHadiah.filter((item) => item._id == id)[0]
          .channelType,
        channelName: dataPojokHadiah.filter((item) => item._id == id)[0]
          .channelName,
        channelNameLainnya: dataPojokHadiah.filter((item) => item._id == id)[0]
          .channelNameLainnya,
        name: dataPojokHadiah.filter((item) => item._id == id)[0].name,
        image: dataPojokHadiah.filter((item) => item._id == id)[0].image,
        address: dataPojokHadiah.filter((item) => item._id == id)[0].address,
        contact: dataPojokHadiah.filter((item) => item._id == id)[0].contact,
      })
    );
    dispatch(setPojokHadiahId(id));
  };

  //console.log(singlePojokHadiah);

  return (
    <div className=" shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex bg-gray-100 pt-2 pl-2 pb-2 pr-2">
        <div className="flex-1">
          {channelNameLainnya ? channelNameLainnya : channelName}
        </div>
        <PojokHadiahModal
          showButton={false}
          id={id}
          data={data}
          dataPojokHadiah={dataPojokHadiah}
        />

        <div
          className="px-2 text-gray-500 cursor-pointer"
          onClick={openEditModal}
        >
          <FaEdit />
        </div>
        <div
          className="px-2 text-gray-500 cursor-pointer"
          onClick={openDeleteConfirmation}
        >
          <FaTrashAlt />
        </div>

        <DeleteConfirmation
          cancel={closeDeleteConfirmation}
          ok={deletePojokHadiah}
        >
          Anda yakin akan menghapus channel ini?
        </DeleteConfirmation>
      </div>

      <div className="w-full bg-gray-50  pt-2 pl-2 pb-2 pr-2 rounded-b-lg overflow-hidden shadow-lg">
        <div className="grid place-items-center  ">
          <div className="w-1/2 py-4 ">
            <img src={image} />
          </div>
        </div>
        <div className="grid place-items-center pt-2 font-semibold">
          <div>{name}</div>
          <div>{contact}</div>
        </div>
        <div className="grid place-items-center">
          <div className="text-center px-4">{address}</div>
        </div>
      </div>
    </div>
  );
}

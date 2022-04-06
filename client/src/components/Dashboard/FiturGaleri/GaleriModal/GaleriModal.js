import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import { updateInvitationAction } from "../../../../actions/invitationActions";
import { setShowGaleriModal } from "../../../../actions/layoutActions";
import { FaImage } from "react-icons/fa";
import Axios from "axios";

export default function GaleriModal({ data, dataGaleri }) {
  const dispatch = useDispatch();
  const [imageItem, setImageItem] = useState(dataGaleri);
  const [tempImage, setTempImage] = useState("");

  const { showGaleriModal } = useSelector((state) => state.dashboard);

  const openModal = (e) => {
    dispatch(setShowGaleriModal(true));
    setTempImage("");
  };

  const closeModal = () => {
    dispatch(setShowGaleriModal(false));
    setTempImage("");
  };

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "jauzatu");
    formData.append("cloud_name", "diztl7cl4");

    Axios.post(
      "https://api.cloudinary.com/v1_1/diztl7cl4/image/upload",
      formData
    ).then((res) => {
      console.log(res.data.url);
      setTempImage(res.data.url);
      setImageItem([...imageItem, { image: res.data.url }]);
      dispatch(
        updateInvitationAction({
          ...data,
          id: data?._id,
          galeri: [...imageItem, { image: res.data.url }],
        })
      );
      dispatch(setShowGaleriModal(false));
    });
  };

  return (
    <>
      <div className="grid place-items-center">
        <button className="primary__button" type="button" onClick={openModal}>
          Tambah Foto
        </button>
      </div>
      {showGaleriModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-[400px] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="absolute top-2 right-4 text-xl cursor-pointer"
                  onClick={closeModal}
                >
                  x
                </div>
                {/*body*/}
                <div className="mt-6 px-6 py-6 w-full sm:w-[400px]">
                  {/* <div className="w-full h-full aspect-square rounded-lg shadow-lg bg-gray-100">
                    {tempImage ? (
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src={tempImage}
                          alt=""
                          className="object-fit object-cover h-full w-full"
                        />
                      </div>
                    ) : (
                      <div className="text-gray-300 grid place-items-center h-full">
                        <FaImage size={100} />
                      </div>
                    )}
                  </div>
                  <div className="form__input py-2 mt-2 text-center">
                    <FileBase64
                      multiple={false}
                      onDone={chooseImage}
                      max-size="2000"
                    />
                  </div> */}

                  <div className="form__input py-2 mt-2 text-center">
                    <input
                      type="file"
                      onChange={(e) => setTempImage(e.target.files)}
                    />
                  </div>
                  <div className="grid place-items-center mt-4">
                    <button
                      className="primary__button"
                      onClick={() => uploadImage(tempImage)}
                    >
                      Tambah Foto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}

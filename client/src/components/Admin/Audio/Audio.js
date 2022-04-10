import { useDispatch, useSelector } from "react-redux";
import FrameAdmin from "../FrameAdmin";
import { setShowAudioModal } from "../../../actions/adminActions";
import { AudioList, AudioModalAdmin } from "../../";

export default function Audio({ audioList }) {
  const dispatch = useDispatch();

  return (
    <FrameAdmin title="Audio">
      <div className=" pt-4 pb-4">
        <div className="bg-gray-50 rounded-lg shadow-lg py-2 px-4 mt-2 mb-6">
          <div
            className="flex items-center justify-center border-4 border-dotted border-gray-300 rounded-md cursor-pointer"
            onClick={() => dispatch(setShowAudioModal(true))}
          >
            <div className="py-2">
              <div className="text-4xl text-gray-300 font-bold text-center">
                +
              </div>
              <div className="text-xs text-gray-300 text-center -mt-1">
                Tambah Audio
              </div>
            </div>
          </div>
        </div>
        <AudioModalAdmin />
        <AudioList audioList={audioList} />
      </div>
    </FrameAdmin>
  );
}

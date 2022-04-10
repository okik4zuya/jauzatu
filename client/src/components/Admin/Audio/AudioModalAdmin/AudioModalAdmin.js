import { useDispatch, useSelector } from "react-redux";
import { setShowAudioModal } from "../../../../actions/adminActions";
import { FrameModal } from "../../../";

export default function AudioModalAdmin() {
  const dispatch = useDispatch();
  const { showAudioModal } = useSelector((state) => state.admin);
  return (
    <>
      <FrameModal
        showState={showAudioModal}
        onClose={() => dispatch(setShowAudioModal(false))}
      >
        Test
      </FrameModal>
    </>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { setShowTemaModal } from "../../../../actions/adminActions";
import { FrameModal } from "../../../";

export default function TemaModalAdmin({ themes, provider }) {
  const dispatch = useDispatch();
  const { showTemaModal } = useSelector((state) => state.admin);
  console.log(provider);
  console.log(themes);

  return (
    <>
      <FrameModal
        showState={showTemaModal}
        onClose={() => dispatch(setShowTemaModal(false))}
      >
        <div>
          <form></form>
        </div>
      </FrameModal>
    </>
  );
}

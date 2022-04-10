import { useDispatch, useSelector } from "react-redux";
import { setShowUserModal } from "../../../../actions/adminActions";
import { FrameModal } from "../../../";

export default function UserModalAdmin() {
  const dispatch = useDispatch();
  const { showUserModal } = useSelector((state) => state.admin);
  return (
    <>
      <FrameModal
        showState={showUserModal}
        onClose={() => dispatch(setShowUserModal(false))}
      >
        Test
      </FrameModal>
    </>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { setShowUserModal } from "../../../actions/adminActions";
import FrameAdmin from "../FrameAdmin";
import { UserList, UserModalAdmin } from "../../";

export default function User({ userData }) {
  const dispatch = useDispatch();
  return (
    <FrameAdmin title="User">
      <div className=" pt-4 pb-4">
        <div className="bg-gray-50 rounded-lg shadow-lg py-2 px-4 mt-2 mb-6">
          <div
            className="flex items-center justify-center border-4 border-dotted border-gray-300 rounded-md cursor-pointer"
            onClick={() => dispatch(setShowUserModal(true))}
          >
            <div className="py-2">
              <div className="text-4xl text-gray-300 font-bold text-center">
                +
              </div>
              <div className="text-xs text-gray-300 text-center -mt-1">
                Tambah User
              </div>
            </div>
          </div>
        </div>
        <UserModalAdmin />
        <UserList userData={userData} />
      </div>
    </FrameAdmin>
  );
}

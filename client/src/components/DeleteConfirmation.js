import { useDispatch, useSelector } from "react-redux";
import { setShowDeleteConfirmation } from "../actions/layoutActions";

export default function DeleteConfirmation({ children, cancel, ok }) {
  const dispatch = useDispatch();
  const { showDeleteConfirmation } = useSelector((state) => state.dashboard);
  return (
    <>
      {showDeleteConfirmation && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-[400px] my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="absolute top-2 right-4 text-xl cursor-pointer"
                  onClick={cancel}
                >
                  x
                </div>
                {/*body*/}
                <div className="w-full  grid place-items-center py-4 mt-2">
                  {children}
                </div>
                <div className=" px-6 w-full sm:w-[400px] ">
                  <div className="grid place-items-center mt-4 ">
                    <div className="flex mb-2">
                      <button className="secondary__button" onClick={cancel}>
                        Cancel
                      </button>
                      <button className="primary__button" onClick={ok}>
                        OK
                      </button>
                    </div>
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

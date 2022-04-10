import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowUndanganModal } from "../../../../actions/adminActions";
import { FrameModal } from "../../../";
import { createInvitationAction } from "../../../../actions/invitationActions";

export default function UndanganModalAdmin({ userData }) {
  const dispatch = useDispatch();
  const { showUndanganModal } = useSelector((state) => state.admin);
  const [slug, setSlug] = useState("");
  const [userId, setUserId] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const [showEmailList, setShowEmailList] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createInvitationAction(slug, userId));
    dispatch(setShowUndanganModal(false));
  };

  const emailChangeHandler = (e) => {
    setSearchEmail(e.target.value);
    console.log(e);
    if (searchEmail) {
      setShowEmailList(true);
    } else if (!searchEmail) {
      setShowEmailList(false);
    }
  };
  const setAccount = (item) => {
    setUserId(item._id);
    setSearchEmail(item.email);
    setShowEmailList(false);
  };

  console.log(userId);
  console.log(showEmailList);
  return (
    <>
      <FrameModal
        showState={showUndanganModal}
        onClose={() => dispatch(setShowUndanganModal(false))}
      >
        <div>
          <form>
            <div>
              <input
                className="form__input mb-2"
                type="text"
                placeholder="Slug"
                onChange={(e) => {
                  setSlug(e.target.value);
                }}
              />
            </div>
            <div className="relative">
              <input
                className="form__input mb-2"
                placeholder="Cari Akun..."
                value={searchEmail}
                onChange={emailChangeHandler}
              />
              {showEmailList && (
                <div className="absolute rounded-lg top-[100%] left-0 bg-gray-50 border-2 border-gold w-full overflow-hidden">
                  <div
                    className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                    onClick={() => setShowEmailList(false)}
                  >
                    Cancel...
                  </div>
                  {userData
                    .filter((item) =>
                      item.email
                        .toLowerCase()
                        .includes(searchEmail.toLowerCase())
                    )
                    .map((item) => (
                      <div
                        className=" py-2 px-4 cursor-pointer hover:bg-gray-200"
                        onClick={() => setAccount(item)}
                      >
                        {item.email}
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button className="primary__button" onClick={submitHandler}>
                Buat
              </button>
            </div>
          </form>
        </div>
      </FrameModal>
    </>
  );
}

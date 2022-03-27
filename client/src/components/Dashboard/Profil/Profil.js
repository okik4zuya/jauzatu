import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FrameDashboard } from "../../";

export default function Profil() {
  const [pofile, setProfile] = useState({
    name: "",
    email: "",
    pic: "",
    password: "",
    confirmPassword: "",
    picMessage: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;
  return (
    <>
      <FrameDashboard title="Profil">
        <div className="w-[150px] h-[150px] rounded-full mt-10 mx-auto overflow-hidden grid place-items-center">
          <img src={userInfo.pic} className="object-cover w-full h-full" />
        </div>
        <div className="mt-[40px]">
          <form>
            <div className="lg:w-[400px] mx-auto">
              <div class="mb-4 w-full">
                <label for="name" class="form__label">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  class="form__input"
                  placeholder=""
                  value={userInfo.name}
                  required
                />
              </div>
              <div class="mb-4 w-full">
                <label for="email" class="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  class="form__input"
                  placeholder=""
                  value={userInfo.email}
                  required
                />
              </div>
              <div class="mb-4 w-full">
                <label for="password" class="form__label">
                  Password Baru
                </label>
                <input
                  type="password"
                  name="password"
                  class="form__input"
                  placeholder=""
                  required
                />
              </div>
              <div class="mb-4 w-full">
                <label for="confirmPassword" class="form__label">
                  Konfirmasi Password Baru
                </label>
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  class="form__input"
                  placeholder=""
                  required
                />
              </div>
              <div class="mb-4 w-full">
                <label for="pic" class="form__label">
                  Upload Gambar Profil
                </label>
                <input
                  type="file"
                  name="pic"
                  class="form__input"
                  placeholder=""
                  required
                />
              </div>
              <div className="grid place-items-center">
                <button type="submit" className="primary__button">
                  Update Profil
                </button>
              </div>
            </div>
          </form>
        </div>
      </FrameDashboard>
    </>
  );
}

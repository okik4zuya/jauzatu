import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FrameDashboard, Loading, ErrorMessage } from "../../";
import { updateProfile } from "../../../actions/userActions";

export default function Profil() {
  const [profile, setProfile] = useState({
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

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      setProfile({
        ...profile,
        name: userInfo.name,
        email: userInfo.email,
        pic: userInfo.pic,
      });
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateProfile({
        name: profile.name,
        email: profile.email,
        password: profile.password,
        pic: profile.pic,
      })
    );
  };

  const postDetails = (pics) => {
    setProfile({ ...profile, picMessage: null });
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "codeslices");
      data.append("cloud_name", "diztl7cl4");
      fetch("https://api.cloudinary.com/v1_1/diztl7cl4/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile({ ...profile, pic: data.url.toString() });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setProfile({ ...profile, picMessage: "Please Select an Image" });
    }
  };

  return (
    <>
      <FrameDashboard title="Profil">
        <div className="w-[150px] h-[150px] rounded-full mt-10 mx-auto overflow-hidden grid place-items-center">
          <img src={profile.pic} className="object-cover w-full h-full" />
        </div>
        <div className="mt-[40px]">
          <form onSubmit={submitHandler}>
            {loading && <Loading />}
            {success && (
              <ErrorMessage variant="success">Berhasil Diupdate!!</ErrorMessage>
            )}
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
                  value={profile.name}
                  required
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
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
                  value={profile.email}
                  required
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
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
                  onChange={(e) =>
                    setProfile({ ...profile, confirmPassword: e.target.value })
                  }
                />
              </div>
              {profile.picMessage && (
                <ErrorMessage variant="danger">
                  {profile.picMessage}
                </ErrorMessage>
              )}
              <div class="mb-4 w-full">
                <label for="pic" class="form__label">
                  Upload Gambar Profil
                </label>
                <input
                  type="file"
                  name="pic"
                  class="form__input"
                  placeholder=""
                  onChange={(e) => postDetails(e.target.files[0])}
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

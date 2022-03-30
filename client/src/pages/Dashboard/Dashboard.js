import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urlConstants";
import axios from "axios";
import { setActive } from "../../actions/layoutActions";
import {
  Overview,
  PilihTema,
  EditAcara,
  EditMempelai,
  EditTeks,
  Profil,
  InfoPaket,
  SideMenu,
  BuatUndangan,
  HapusUndangan,
  FiturCountdown,
  FiturAudioLatar,
  FiturCustomDomain,
  FiturGaleri,
  FiturGoogleMaps,
  FiturLoveJourney,
  FiturPojokHadiah,
  FiturRSVP,
  FiturUcapan,
} from "../../components";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const [data, setData] = useState();
  const { active, showSideMenu } = layout;
  const { userInfo } = useSelector((state) => state.userLogin);
  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const fetchData = async () => {
        setData(await axios.get(`${BASE_URL}/api/invitations/userid`, config));
      };

      try {
        fetchData();
      } catch (error) {
        setData([]);
      }
    }
  }, [userInfo, userInfo.invitationCreated, active, successUpdate]);

  console.log(userInfo);

  return (
    <div className="bg-gray-200 w-full min-h-screen pt-20 pb-40">
      {userInfo ? (
        <div className="flex w-full lg:w-2/3 mx-auto px-4 ">
          <SideMenu />

          <div className="flex-auto bg-white p-4 h-full md:w-[50vw] w-[100vw] md:ml-[20px] mx-[10px] rounded-xl shadow-lg">
            {active === "Overview" && <Overview />}
            {active === "Buat Undangan" && <BuatUndangan />}
            {active === "Pilih Tema" && <PilihTema data={data.data[0]} />}
            {active === "Edit Mempelai" && <EditMempelai data={data.data[0]} />}
            {active === "Edit Acara" && <EditAcara data={data.data[0]} />}
            {active === "Edit Teks" && <EditTeks data={data.data[0]} />}
            {active === "Hapus Undangan" && (
              <HapusUndangan data={data.data[0]} />
            )}
            {active === "Info Paket" && <InfoPaket />}
            {active === "Profil" && <Profil />}
            {active === "Audio Latar" && <FiturAudioLatar />}
            {active === "Countdown" && <FiturCountdown />}
            {active === "Google Maps" && <FiturGoogleMaps />}
            {active === "Love Journey" && <FiturLoveJourney />}
            {active === "Galeri" && <FiturGaleri />}
            {active === "RSVP" && <FiturRSVP />}
            {active === "Pojok Hadiah" && <FiturPojokHadiah />}
            {active === "Ucapan" && <FiturUcapan />}
            {active === "Custom Domain" && <FiturCustomDomain />}
          </div>
        </div>
      ) : (
        <div>Anda tidak terautentikasi!</div>
      )}
    </div>
  );
}

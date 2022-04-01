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
import { fetchInvitationAction } from "../../actions/invitationActions";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const [data, setData] = useState();
  const { active, showSideMenu } = layout;
  const { userInfo } = useSelector((state) => state.userLogin);
  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;
  const { showLoveJourneyModal } = useSelector((state) => state.dashboard);
  const { invitation } = useSelector((state) => state.invitationFetch);
  // console.log(invitation);
  // console.log(userInfo);
  // console.log(`show love journey modal : ${showLoveJourneyModal}`);

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
      // dispatch(fetchInvitationAction());
      //setData([...invitation]);
    }
  }, [
    userInfo,
    userInfo.invitationCreated,
    active,
    successUpdate,
    loadingUpdate,
    showLoveJourneyModal,
  ]);

  // console.log(`successUpdate: ${successUpdate}`);

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
            {active === "Audio Latar" && (
              <FiturAudioLatar data={data.data[0]} />
            )}
            {active === "Countdown" && <FiturCountdown data={data.data[0]} />}
            {active === "Google Maps" && (
              <FiturGoogleMaps data={data.data[0]} />
            )}
            {active === "Love Journey" && (
              <FiturLoveJourney data={data.data[0]} />
            )}
            {active === "Galeri" && <FiturGaleri data={data.data[0]} />}
            {active === "RSVP" && <FiturRSVP data={data.data[0]} />}
            {active === "Pojok Hadiah" && (
              <FiturPojokHadiah data={data.data[0]} />
            )}
            {active === "Ucapan" && <FiturUcapan data={data.data[0]} />}
            {active === "Custom Domain" && (
              <FiturCustomDomain data={data.data[0]} />
            )}
          </div>
        </div>
      ) : (
        <div>Anda tidak terautentikasi!</div>
      )}
    </div>
  );
}

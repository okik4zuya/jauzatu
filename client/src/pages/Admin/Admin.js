import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urlConstants";
import axios from "axios";
import {
  SideMenuAdmin,
  OverviewAdmin,
  Undangan,
  Audio,
  Tema,
  User,
} from "../../components";

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [provider, setProvider] = useState();
  const [invitations, setInvitations] = useState([]);
  const [invitationList, setInvitationList] = useState([]);
  const [userData, setUserData] = useState();
  const { active } = useSelector((state) => state.admin);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success: successCreate } = useSelector(
    (state) => state.invitationCreate
  );
  const { success: successUpdate } = useSelector(
    (state) => state.invitationUpdate
  );
  const { success: successDelete } = useSelector(
    (state) => state.invitationDelete
  );

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const fetchInvitationList = async () => {
        setInvitationList(
          await axios.get(`${BASE_URL}/api/invitations/list`, config)
        );
      };
      const fetchInvitations = async () => {
        setInvitations(await axios.get(`${BASE_URL}/api/invitations`, config));
      };
      const fetchProvider = async () => {
        setProvider(await axios.get(`${BASE_URL}/api/provider`, config));
      };
      const fetchUser = async () => {
        setUserData(await axios.get(`${BASE_URL}/api/users`, config));
      };
      try {
        fetchInvitations();
        fetchInvitationList();
        fetchProvider();
        fetchUser();
      } catch (error) {
        setInvitations([]);
        setProvider([]);
        setUserData([]);
      }
    }
  }, [active, userInfo, successUpdate, successCreate, successDelete]);

  return (
    <div className="bg-gray-200 w-full min-h-screen pt-20 pb-40">
      <div className="flex w-full lg:w-2/3 mx-auto px-4 ">
        <SideMenuAdmin />
        <div className="flex-auto bg-white p-4 h-full md:w-[50vw] w-[100vw] md:ml-[20px] mx-[10px] rounded-xl shadow-lg">
          {active === "Overview" && (
            <OverviewAdmin
              invitationList={invitationList?.data}
              userData={userData?.data}
              provider={provider?.data[0]}
            />
          )}
          {active === "Undangan" && (
            <Undangan
              invitationList={invitationList?.data}
              userData={userData?.data}
            />
          )}
          {active === "Audio" && (
            <Audio audioList={provider.data[0].music} provider={provider} />
          )}
          {active === "Tema" && (
            <Tema themes={provider?.data[0].theme} provider={provider} />
          )}
          {active === "User" && <User userData={userData?.data} />}
        </div>
      </div>
    </div>
  );
}

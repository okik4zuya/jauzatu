import FrameAdmin from "../FrameAdmin";
import { StatCard } from "../../";

export default function Overview({ invitationList, provider, userData }) {
  console.log(invitationList);
  console.log(provider);
  console.log(userData);
  return (
    <FrameAdmin title="Overview">
      <div className="flex flex-wrap justify-center items-center">
        <StatCard title="Semua User" value={userData?.length} />
        <StatCard
          title="User Bronze"
          value={
            userData?.filter((item) => item.accountType == "Bronze").length
          }
        />
        <StatCard
          title="User Silver"
          value={
            userData?.filter((item) => item.accountType == "Silver").length
          }
        />
        <StatCard
          title="User Gold"
          value={userData?.filter((item) => item.accountType == "Gold").length}
        />
        <StatCard title="Undangan" value={invitationList?.length} />
        <StatCard title="Tema" value={provider?.theme.length} />
        <StatCard title="Audio" value={provider?.music.length} />
      </div>
    </FrameAdmin>
  );
}

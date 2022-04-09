import FrameAdmin from "../FrameAdmin";
import { UndanganList } from "../../";

export default function Undangan({ invitationList, userData }) {
  return (
    <FrameAdmin title="Undangan">
      <div className=" pt-4 pb-4">
        <UndanganList invitationList={invitationList} userData={userData} />
      </div>
    </FrameAdmin>
  );
}

import React from "react";
import FrameAdmin from "../FrameAdmin";
import { UserList } from "../../";

export default function User({ userData }) {
  return (
    <FrameAdmin title="User">
      <div className=" pt-4 pb-4">
        <UserList userData={userData} />
      </div>
    </FrameAdmin>
  );
}

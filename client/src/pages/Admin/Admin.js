import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../actions/adminActions";
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
  const { active } = useSelector((state) => state.admin);
  useEffect(() => {}, []);

  console.log(active);
  return (
    <div className="bg-gray-200 w-full min-h-screen pt-20 pb-40">
      <div className="flex w-full lg:w-2/3 mx-auto px-4 ">
        <SideMenuAdmin />
        <div className="flex-auto bg-white p-4 h-full md:w-[50vw] w-[100vw] md:ml-[20px] mx-[10px] rounded-xl shadow-lg">
          {active === "Overview" && <OverviewAdmin />}
          {active === "Undangan" && <Undangan />}
          {active === "Audio" && <Audio />}
          {active === "Tema" && <Tema />}
          {active === "User" && <User />}
        </div>
      </div>
    </div>
  );
}

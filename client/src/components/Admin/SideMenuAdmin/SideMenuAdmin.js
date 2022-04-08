import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../../actions/adminActions";
import { FaGem, FaMailBulk, FaMusic, FaUser, FaUserAlt } from "react-icons/fa";
import { HiHome, HiTemplate } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";

export default function SideMenuAdmin() {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.admin);
  // Overview
  // User
  // Undangan
  // Tema
  // Audio

  console.log(active);

  return (
    <div className="w-[250px] hidden sm:block" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <ul class="space-y-2">
          <li onClick={() => dispatch(setActive("Overview"))}>
            <a href="#" className="dashboard__sidemenu__item">
              <HiHome className="dashboard__sidemenu__icon" />
              <span className="ml-3">Overview</span>
            </a>
          </li>

          <li onClick={() => dispatch(setActive("User"))}>
            <a href="#" className="dashboard__sidemenu__item">
              <FaUser className="dashboard__sidemenu__icon" />
              <span className="ml-3">User</span>
            </a>
          </li>
          <li onClick={() => dispatch(setActive("Undangan"))}>
            <a href="#" className="dashboard__sidemenu__item ">
              <AiFillMail className="dashboard__sidemenu__icon" />
              <span className="ml-3">Undangan</span>
            </a>
          </li>
          <li onClick={() => dispatch(setActive("Tema"))}>
            <a href="#" className="dashboard__sidemenu__item ">
              <HiTemplate className="dashboard__sidemenu__icon" />
              <span className="ml-3">Tema</span>
            </a>
          </li>
          <li onClick={() => dispatch(setActive("Audio"))}>
            <a href="#" className="dashboard__sidemenu__item ">
              <FaMusic className="dashboard__sidemenu__icon" />
              <span className="ml-3">Audio</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

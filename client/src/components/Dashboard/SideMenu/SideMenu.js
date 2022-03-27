import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiHome, HiTemplate, HiDocumentText } from "react-icons/hi";
import {
  FaChevronRight,
  FaChevronLeft,
  FaUserAlt,
  FaEdit,
  FaHeartbeat,
  FaCalendarCheck,
  FaGem,
  FaChevronDown,
} from "react-icons/fa";
import { SHOW_SIDE_MENU } from "../../../constants/layoutConstants";
import { setActive } from "../../../actions/layoutActions";

export default function SideMenu() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { showSideMenu, active } = layout;

  const [expandEditUndangan, setExpandEditUndangan] = useState(false);

  return (
    <aside className="w-[250px] hidden sm:block" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <ul class="space-y-2">
          <li onClick={() => dispatch(setActive("Overview"))}>
            <a href="#" className="dashboard__sidemenu__item">
              <HiHome className="dashboard__sidemenu__icon" />
              <span className="ml-3">Overview</span>
            </a>
          </li>

          <li>
            <button
              type="button"
              className="dashboard__sidemenu__item w-full"
              onClick={() => setExpandEditUndangan(!expandEditUndangan)}
            >
              <FaEdit className="flex-shrink-0 dashboard__sidemenu__icon" />
              <span className="dashboard__sidemenu__text">Edit Undangan</span>
              <FaChevronDown
                className="dashboard__sidemenu__icon"
                fill="currentColor"
              />
            </button>
            {expandEditUndangan && (
              <ul id="dropdown_edit_undangan" className="ml-4">
                <li className="dashboard__sidemenu__item">
                  <HiTemplate className="flex-shrink-0 dashboard__sidemenu__icon" />
                  <span className="dashboard__sidemenu__text">Pilih Tema</span>
                </li>
                <li className="dashboard__sidemenu__item">
                  <FaHeartbeat className="flex-shrink-0 dashboard__sidemenu__icon" />
                  <span className="dashboard__sidemenu__text">
                    Edit Mempelai
                  </span>
                </li>
                <li className="dashboard__sidemenu__item">
                  <FaCalendarCheck className="flex-shrink-0 dashboard__sidemenu__icon" />
                  <span className="dashboard__sidemenu__text">Edit Acara</span>
                </li>
                <li className="dashboard__sidemenu__item">
                  <HiDocumentText className="flex-shrink-0 dashboard__sidemenu__icon" />
                  <span className="dashboard__sidemenu__text">Edit Teks</span>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => dispatch(setActive("Info Paket"))}>
            <a href="#" className="dashboard__sidemenu__item">
              <FaGem className="dashboard__sidemenu__icon" />
              <span className="ml-3">Info Paket</span>
            </a>
          </li>
          <li onClick={() => dispatch(setActive("Profil"))}>
            <a href="#" className="dashboard__sidemenu__item">
              <FaUserAlt className="dashboard__sidemenu__icon" />
              <span className="ml-3">Profil</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

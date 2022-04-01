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
  FaMusic,
  FaMapMarkedAlt,
  FaImages,
  FaBookmark,
  FaComments,
  FaGift,
  FaGlobe,
  FaStopwatch,
  FaTrashAlt,
} from "react-icons/fa";
import { SHOW_SIDE_MENU } from "../../../constants/layoutConstants";
import { setActive } from "../../../actions/layoutActions";

export default function SideMenu() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { showSideMenu, active } = layout;

  const { userInfo } = useSelector((state) => state.userLogin);

  const [expandEditUndangan, setExpandEditUndangan] = useState(false);
  const [expandFitur, setExpandFitur] = useState(false);

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
          {userInfo.invitationCreated ? (
            <li>
              <button
                type="button"
                className="dashboard__sidemenu__item w-full"
                onClick={() => setExpandEditUndangan(!expandEditUndangan)}
              >
                <FaEdit className="flex-shrink-0 dashboard__sidemenu__icon" />
                <span className="dashboard__sidemenu__text flex-1">
                  Edit Undangan
                </span>
                <FaChevronDown
                  className="dashboard__sidemenu__icon"
                  fill="currentColor"
                />
              </button>
              {expandEditUndangan && (
                <ul id="dropdown_edit_undangan" className="ml-4">
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Pilih Tema"))}
                  >
                    <HiTemplate className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Pilih Tema
                    </span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Edit Mempelai"))}
                  >
                    <FaHeartbeat className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Edit Mempelai
                    </span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Edit Acara"))}
                  >
                    <FaCalendarCheck className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Edit Acara
                    </span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Edit Teks"))}
                  >
                    <HiDocumentText className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">Edit Teks</span>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li onClick={() => dispatch(setActive("Buat Undangan"))}>
              <a href="#" className="dashboard__sidemenu__item">
                <FaEdit className="dashboard__sidemenu__icon" />
                <span className="ml-3">Buat Undangan</span>
              </a>
            </li>
          )}
          {userInfo.invitationCreated && (
            <li>
              <button
                type="button"
                className="dashboard__sidemenu__item w-full"
                onClick={() => setExpandFitur(!expandFitur)}
              >
                <FaEdit className="flex-shrink-0 dashboard__sidemenu__icon" />
                <span className="dashboard__sidemenu__text flex-1">Fitur</span>
                <FaChevronDown
                  className="dashboard__sidemenu__icon"
                  fill="currentColor"
                />
              </button>
              {expandFitur && (
                <ul id="dropdown_edit_undangan" className="ml-4">
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Countdown"))}
                  >
                    <FaStopwatch className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">Countdown</span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Audio Latar"))}
                  >
                    <FaMusic className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Audio Latar
                    </span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Google Maps"))}
                  >
                    <FaMapMarkedAlt className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Google Maps
                    </span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Love Journey"))}
                  >
                    <FaHeartbeat className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Love Journey
                    </span>
                    <span className="badge__gold">Gold</span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Galeri"))}
                  >
                    <FaImages className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">Galeri</span>
                    <span className="badge__gold">Gold</span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("RSVP"))}
                  >
                    <FaBookmark className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">RSVP</span>
                    <span className="badge__gold">Gold</span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Pojok Hadiah"))}
                  >
                    <FaGift className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Pojok Hadiah
                    </span>
                    <span className="badge__gold">Gold</span>
                  </li>
                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Ucapan"))}
                  >
                    <FaComments className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">Ucapan</span>
                    <span className="badge__gold">Gold</span>
                  </li>

                  <li
                    className="dashboard__sidemenu__item"
                    onClick={() => dispatch(setActive("Custom Domain"))}
                  >
                    <FaGlobe className="flex-shrink-0 dashboard__sidemenu__icon" />
                    <span className="dashboard__sidemenu__text">
                      Custom Domain
                    </span>
                    <span className="badge__purple ml-1">Platinum</span>
                  </li>
                </ul>
              )}
            </li>
          )}

          <li onClick={() => dispatch(setActive("Info Paket"))}>
            <a href="#" className="dashboard__sidemenu__item">
              <FaGem className="dashboard__sidemenu__icon" />
              <span className="ml-3">Info Paket</span>
            </a>
          </li>
          <li onClick={() => dispatch(setActive("Profil"))}>
            <a href="#" className="dashboard__sidemenu__item mb-6">
              <FaUserAlt className="dashboard__sidemenu__icon" />
              <span className="ml-3">Profil</span>
            </a>
          </li>

          {userInfo.invitationCreated && (
            <ul className="pt-2 pb-2 bg-red-100 rounded-xl">
              <div className="ml-2">Danger Zone</div>
              <li
                className="dashboard__sidemenu__item "
                onClick={() => dispatch(setActive("Hapus Undangan"))}
              >
                <FaTrashAlt className="flex-shrink-0 dashboard__sidemenu__icon" />
                <span className="dashboard__sidemenu__text text-red-600">
                  Hapus Undangan
                </span>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </aside>
  );
}

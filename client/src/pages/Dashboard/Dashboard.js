import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  GridItem,
  Center,
  Flex,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { SIDE_MENU } from "../../constants/layoutConstants";
import { set } from "../../actions/layoutActions";

import {
  Overview,
  PilihTema,
  EditAcara,
  EditMempelai,
  EditTeks,
  Profil,
  InfoPaket,
  SideMenu,
  SideMenuItem,
} from "../../components";

export default function Dashboard() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { active, showSideMenu } = layout;

  return (
    <div className="bg-gray-200 w-full h-full pt-20 pb-40">
      <div className="flex w-full lg:w-2/3 mx-auto px-4 ">
        <SideMenu />

        <div className="flex-auto bg-white p-4 h-full md:w-[50vw] w-[100vw] md:ml-[20px] mx-[10px] rounded-xl shadow-lg">
          {active === "Overview" && <Overview />}
          {active === "Pilih Tema" && <PilihTema />}
          {active === "Edit Mempelai" && <EditMempelai />}
          {active === "Edit Acara" && <EditAcara />}
          {active === "Edit Teks" && <EditTeks />}
          {active === "Info Paket" && <InfoPaket />}
          {active === "Profil" && <Profil />}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import { SHOW_SIDE_MENU } from "../../constants/layoutConstants";
import { set, setShowSideMenu } from "../../actions/layoutActions";
import DashboardDrawer from "./DashboardDrawer";
import { SideMenu } from "../";
import { BelumBuat } from "../";
import { HiMenu } from "react-icons/hi";

export default function FrameDashboard({ children, title }) {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { showSideMenu, active } = layout;

  const [openMenu, setOpenMenu] = useState(false);

  const openSideMenu = () => {
    setShowSideMenu(true);
    setOpenMenu(true);
  };

  return (
    <>
      <div className="flex">
        <div
          className="grid place-items-center sm:hidden text-center w-[70px] py-2 text-white bg-gold rounded-l-lg font-bold text-xl shadow-md"
          onClick={openSideMenu}
        >
          <HiMenu size={30} />
        </div>
        <DashboardDrawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Spacer />

        <div className="text-center sm:w-full w-full py-2 text-white bg-gold rounded-r-lg font-bold text-xl shadow-md">
          {title}
        </div>
      </div>
      <div className="mt-2">{children}</div>
    </>
  );
}

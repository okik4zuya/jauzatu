import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Icon,
} from "@chakra-ui/react";
import { setActive } from "../../actions/layoutActions";

import { set } from "../../actions/layoutActions";
import SideMenu from "./SideMenu/SideMenu";

export default function DashboardDrawer({ openMenu, setOpenMenu }) {
  const dispatch = useDispatch();
  const { showSideMenu, active } = useSelector((state) => state.dashboard);

  return (
    <div className="">
      <Drawer
        placement="left"
        onClose={() => setOpenMenu(!openMenu)}
        isOpen={openMenu}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <div className="pt-[50px]">
              <SideMenu />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

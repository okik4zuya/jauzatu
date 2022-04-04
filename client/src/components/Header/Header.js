import React, { useState, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//chakra-ui
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Image,
  Avatar,
  HStack,
  VStack,
  Icon,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HiViewGrid } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

//import components

import { Login } from "../";
//etc
import { logout } from "../../actions/userActions";

const links = {
  home: { name: "Home", to: "/" },
  about: { name: "Kenapa Kami?", to: "/whyus" },
  tema: { name: "Tema", to: "#tema" },

  //In-App links
  login: { name: "Login", to: "/auth" },
  logout: { name: "Logout", to: "/logout" },
  profile: { name: "Profile", to: "/profile" },
  dashboard: { name: "Dashboard", to: "/app/dashboard" },
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, isLogin } = userLogin;

  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gold h-[60px]">
      <div className="relative">
        <div className="flex mt-[10px] px-4">
          <div className="flex flex-1">
            <div
              className="w-[40px] aspect-square"
              onClick={() => navigate("/")}
            >
              <img
                className="object-fit object-cover w-full h-full"
                //boxSize="40px"
                src="https://i.ibb.co/wgJD0KF/logo-jauzatu-gold.png"
                alt="Jauzatu"
              />
            </div>
            <div className="flex">
              <div className="flex items-center mx-4 text-white">
                <div
                  className="mx-4 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </div>
                <div>About</div>
              </div>
            </div>
          </div>

          <div className="flex">
            {!userInfo ? (
              <>
                <button
                  className="secondary__button bg-white text-gold"
                  onClick={() => navigate(links.login.to)}
                >
                  {links.login.name}
                </button>
              </>
            ) : (
              <>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <div className="bg-white rounded-full p-1">
                      <FaUserCircle className="h-[35px] w-[35px] text-gray-300" />
                    </div>
                  </MenuButton>
                  <MenuList className="h-auto">
                    <MenuItem as={Link} to={links.dashboard.to}>
                      {links.dashboard.name}
                    </MenuItem>

                    <MenuDivider />
                    <MenuItem
                      onClick={() => {
                        dispatch(logout());
                        navigate("/");
                      }}
                    >
                      {links.logout.name}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

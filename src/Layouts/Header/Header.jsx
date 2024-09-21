import React, { useEffect, useState } from "react";
import style from "./Header.module.scss";
import SignUpModal from "../../Components/LoginModals/ModalWindows/SignUpModal/SignUpModal";
import LogInModal from "../../Components/LoginModals/ModalWindows/LoginModal/LoginModal";
import ForgotPassModal from "../../Components/LoginModals/ModalWindows/ForgotPassModal/ForgotPassModal";
import CheckEmailModal from "../../Components/LoginModals/ModalWindows/CheckEmailModal/CheckEmailModal";
import NewPassModal from "../../Components/LoginModals/ModalWindows/NewPassModal/NewPassModal";
import SuccessfullyResetModal from "../../Components/LoginModals/ModalWindows/SuccessfullyResetModal/SuccessfullyResetModal";

import { RxCross1 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import HomeNav from "../Navigation/HomeNavMenu.jsx";
import {
  openSignUp,
  openLogIn,
  closeForgotPass,
} from "../../Slices/modal/modalSlice.js";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

export default function HomeHeader(props) {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();

  function handleNavBtn() {
    setOpenNav(!openNav);
  }

  function handleOpenSignUp() {
    setOpenNav(false);
    dispatch(openSignUp());
  }
  function handleOpenLogIn() {
    setOpenNav(false);
    dispatch(openLogIn());
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpenNav(false);
    });
  }, []);

  return (
    <>
      <header
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Escape") setOpenNav(false);
        }}
        className={style.homeHeader}
        style={{ boxShadow: `${props.boxShadow}` }}
      >
        <div className={style.headerContainer}>
          <a href="#" className={style.logoTusc}>
            <img src="/imgs/tuscanyLogo.png" alt="Tuscany logo" />
          </a>
          <HomeNav
            openNav={openNav}
            setOpenNav={setOpenNav}
            openSignUp={handleOpenSignUp}
            openLogIn={handleOpenLogIn}
            color={props.color}
          ></HomeNav>
          <div
            className={`${style.mobileBtn} ${
              openNav ? style.mobileBtnCancel : ""
            }`}
            onClick={handleNavBtn}
          >
            <span
              className={style.menuIcon}
              style={openNav ? { backgroundColor: props.color } : {}}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
      <SignUpModal></SignUpModal>
      <LogInModal></LogInModal>
      <ForgotPassModal></ForgotPassModal>
      <CheckEmailModal></CheckEmailModal>
      <NewPassModal></NewPassModal>
      <SuccessfullyResetModal></SuccessfullyResetModal>
    </>
  );
}

import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./Header.module.scss";
import SignUpModal from "../../Components/LoginModals/ModalWindows/SignUpModal/SignUpModal";
import LogInModal from "../../Components/LoginModals/ModalWindows/LoginModal/LoginModal";
import ForgotPassModal from "../../Components/LoginModals/ModalWindows/ForgotPassModal/ForgotPassModal";
import CheckEmailModal from "../../Components/LoginModals/ModalWindows/CheckEmailModal/CheckEmailModal";
import NewPassModal from "../../Components/LoginModals/ModalWindows/NewPassModal/NewPassModal";
import SuccessfullyResetModal from "../../Components/LoginModals/ModalWindows/SuccessfullyResetModal/SuccessfullyResetModal";

import HomeNav from "../Navigation/HomeNavMenu.jsx";
import { openSignUp, openLogIn } from "../../Slices/modal/modalSlice.js";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { SectionRefsContext } from "../../Providers/SectionRefsContext";
import { InView, useInView } from "react-intersection-observer";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export default function HomeHeader({ isWhite = true }) {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const { sectionBeforeHeader } = useContext(SectionRefsContext);
  const [sticky, setIsSticky] = useState("none");
  const headerRef = useRef(null);

  const { ref: inViewRef, inView } = useInView({
    initialInView: true,
    root: null,
    threshold: 0,
    rootMargin: `-${
      headerRef.current === null
        ? `0px`
        : getComputedStyle(headerRef.current).height
    }`,
    onChange: function (inView, entry) {
      if (entry.boundingClientRect.y === 0) return;
      if (!entry.isIntersecting) {
        setIsSticky("sticky");
      } else {
        setIsSticky("removal");
        setTimeout(() => setIsSticky("none"), 300);
      }
    },
  });

  useEffect(() => {
    inViewRef(sectionBeforeHeader.current);
  }, [sectionBeforeHeader.current]);

  function handleNavBtn() {
    if (!openNav) disableBodyScroll(headerRef);
    else enableBodyScroll(headerRef);
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
        ref={headerRef}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpenNav(false);
        }}
        className={`header ${
          sticky === "sticky"
            ? "header_sticky"
            : sticky === "removal"
            ? "header_sticky_removal"
            : ""
        }`}
        style={{ boxShadow: !isWhite ? "inset 0 -2px 0 #efefef" : "none" }}
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
            isWhite={isWhite}
          ></HomeNav>
          <div
            className={`${style.mobileBtn} ${
              openNav ? style.mobileBtnCancel : ""
            }`}
            onClick={handleNavBtn}
          >
            <span
              className={style.menuIcon}
              style={{
                color: !openNav && !isWhite ? "#333" : "currentcolor",
              }}
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

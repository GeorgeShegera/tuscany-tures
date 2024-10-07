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
import { useInView } from "react-intersection-observer";

export default function HomeHeader({ isWhite = true }) {
  const { introSection, setHeader } = useContext(SectionRefsContext);
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const [sticky, setSticky] = useState("none");
  const headerRef = useRef(null);

  const { ref: inViewRef, inView } = useInView({
    initialInView: true,
    root: null,
    rootMargin: `-${
      headerRef.current === null
        ? `0px`
        : getComputedStyle(headerRef.current).height
    }`,
    onChange: function (inView, entry) {
      if (entry.boundingClientRect.top >= 0 || !introSection) {
        setSticky("none");
        return;
      }
      if (!entry.isIntersecting) {
        setSticky("sticky");
      } else {
        setSticky("removal");
        setTimeout(() => setSticky("none"), 300);
      }
    },
  });

  useEffect(() => {
    if (introSection === null) {
      setSticky("none");
      return;
    }
    inViewRef(introSection);
  }, [introSection]);

  useEffect(() => {
    if (openNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [openNav]);

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

    setHeader(headerRef.current);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpenNav(false);
        }}
        className={`${!isWhite ? "header_white" : "header"} ${
          sticky === "sticky"
            ? "header_sticky"
            : sticky === "removal"
            ? "header_sticky_removal"
            : ""
        }`}
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
          ></HomeNav>
          <div
            className={`${style.mobileBtn} ${
              openNav ? style.mobileBtnCancel : ""
            }`}
            onClick={handleNavBtn}
          >
            <span className={style.menuIcon}>&nbsp;</span>
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

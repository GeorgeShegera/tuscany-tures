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
import useScrollBlock from "../../Hooks/useScrollBlock.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectUserToken, unAuthrize } from "../../Slices/user/UserSlice";
import { useSelector } from "react-redux";

export default function HomeHeader({ isWhite = true }) {
  const { introSection, setHeader } = useContext(SectionRefsContext);
  const [openNav, setOpenNav] = useState({ value: false, modalWnd: null });
  const dispatch = useDispatch();
  const [sticky, setSticky] = useState("none");
  const headerRef = useRef(null);
  useScrollBlock(openNav.value);
  const [rootMargin, setRootMargin] = useState(
    `-${
      !headerRef.current
        ? `0px`
        : `${parseInt(getComputedStyle(headerRef.current).height, 10)}px`
    }`
  );
  const userToken = useSelector(selectUserToken);

  const { ref: inViewRef, inView } = useInView({
    initialInView: true,
    root: null,
    rootMargin: rootMargin,
    onChange: (inView, entry) => {
      console.log(
        `-${
          !headerRef.current
            ? `0px`
            : `${parseInt(getComputedStyle(headerRef.current).height)}px`
        }`
      );
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
    setRootMargin(
      `-${
        !headerRef.current
          ? `0px`
          : `${parseInt(getComputedStyle(headerRef.current).height, 10)}px`
      }`
    );
  }, [headerRef]);

  useEffect(() => {
    if (introSection === null) {
      setSticky("none");
      return;
    }
    inViewRef(introSection);
  }, [introSection]);

  useEffect(() => {
    if (openNav.modalWnd == "signUp") {
      dispatch(openSignUp());
    } else if (openNav.modalWnd == "signIn") {
      dispatch(openLogIn());
    }
  }, [openNav]);

  function handleNavBtn() {
    setOpenNav({ value: !openNav.value, modalWnd: null });
  }

  function handleOpenSignUp() {
    setOpenNav({ value: false, modalWnd: "signUp" });
  }
  function handleOpenLogIn() {
    setOpenNav({ value: false, modalWnd: "signIn" });
  }

  function notificationHandler(message, type) {
    const options = {
      position: "bottom-right",
      autoClose: 2_000,
    };
    switch (type) {
      case "error":
        toast.error(message, options);
        break;
      case "success":
        toast.success(message, options);
        break;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpenNav({ value: false, modalWnd: null });
    });

    setHeader(headerRef.current);
  }, []);

  useEffect(() => {
    if (!userToken) return;
    console.log(new Date(userToken.expires));
    const date = new Date();
    date.setHours(date.getHours() - 1);
    if (userToken.expires <= date.getTime()) {
      dispatch(unAuthrize());
    }
  }, [window.location.href]);

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
        style={{
          paddingRight: `${
            userToken && window.screen.width > 1280 ? "7rem" : "3.2rem"
          }`,
        }}
      >
        <div className={style.headerContainer}>
          <a href="#" className={style.logoTusc}>
            <img src="/imgs/tuscanyLogo.png" alt="Tuscany logo" />
          </a>
          <div className={style.userContainer}>
            <HomeNav
              openNav={openNav}
              setOpenNav={setOpenNav}
              openSignUp={handleOpenSignUp}
              openLogIn={handleOpenLogIn}
            ></HomeNav>
            <div
              className={`${style.mobileBtn} ${
                openNav.value ? style.mobileBtnCancel : ""
              }`}
              onClick={handleNavBtn}
            >
              <span className={style.menuIcon}>&nbsp;</span>
            </div>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
      <SignUpModal></SignUpModal>
      <LogInModal
        errorNotification={() => {
          notificationHandler("Invalid login or password", "error");
        }}
        successNotification={() => {
          notificationHandler("Success", "success");
        }}
      ></LogInModal>
      <ForgotPassModal></ForgotPassModal>
      <CheckEmailModal></CheckEmailModal>
      <NewPassModal></NewPassModal>
      <SuccessfullyResetModal></SuccessfullyResetModal>
      <ToastContainer />
    </>
  );
}

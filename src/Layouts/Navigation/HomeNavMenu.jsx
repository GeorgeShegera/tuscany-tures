import React, { useEffect, useState } from "react";
import style from "./HomeNavMenu.module.scss";
import HeaderLangComp from "../../Components/LangSelector/HeaderLangComp";
import { useNavigate } from "react-router-dom";
import { selectUserToken } from "../../Slices/user/UserSlice";
import { useSelector } from "react-redux";

export default function HomeNav({
  openNav,
  setOpenNav,
  openSignUp,
  openLogIn,
}) {
  function navigateTo(e, url) {
    e.preventDefault();
    window.scrollTo(0, 0);
    setOpenNav({ value: false, modalWnd: null });
    navigate(url);
  }

  const navigate = useNavigate();
  const userToken = useSelector(selectUserToken);

  return (
    <div
      className={`${style.topBarContainer} ${
        userToken ? style.authorized : ""
      } ${openNav.value ? style.openNav : ""}`}
    >
      <div className={style.navWithLangContainer}>
        <nav className={`${style.navigation}`}>
          <ul className={`${style.navList}`}>
            <li>
              <a
                href="#"
                className={style.headerLink}
                onClick={(e) => {
                  navigateTo(e, "/");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={style.headerLink}
                onClick={(e) => {
                  navigateTo(e, "/About");
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={style.headerLink}
                onClick={(e) => {
                  navigateTo(e, "/TourPackages");
                }}
              >
                Tour Packages
              </a>
            </li>
            <li>
              <a
                href="#"
                className={style.headerLink}
                onClick={(e) => {
                  navigateTo(e, "/ContactUs");
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <HeaderLangComp
          options={[
            { label: "Eng", value: "English" },
            { label: "Ger", value: "German" },
            { label: "Fre", value: "French" },
          ]}
        ></HeaderLangComp>
      </div>
      {!userToken ? (
        <div className={style.authContainer}>
          <button
            className={`${style.logInBtn} ${style.loginBtn}`}
            onClick={() => {
              openLogIn();
            }}
          >
            Login
          </button>
          <button
            className={style.signUpBtn}
            onClick={() => {
              openSignUp();
            }}
          >
            Sign up
          </button>
        </div>
      ) : (
        <div
          className={style.btnUser}
          style={{
            backgroundImage: `url(${userToken.avatar})`,
          }}
        ></div>
      )}
    </div>
  );
}

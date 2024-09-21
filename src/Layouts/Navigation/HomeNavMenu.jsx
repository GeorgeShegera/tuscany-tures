import React, { useState } from "react";
import style from "./HomeNavMenu.module.scss";
import HeaderLangComp from "../../Components/LangSelector/HeaderLangComp";
import { useNavigate } from "react-router-dom";

export default function HomeNav({
  openNav,
  setOpenNav,
  openSignUp,
  openLogIn,
  color,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`${style.topBarContainer} ${openNav ? style.openNav : ""}`}
      style={{ color: `${color}` }}
    >
      <nav className={`${style.navigation}`}>
        <ul className={`${style.navList}`}>
          <li>
            <a
              href="#"
              className={style.headerLink}
              onClick={(e) => {
                e.preventDefault();
                setOpenNav(false);
                navigate("/");
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
                e.preventDefault();
                setOpenNav(false);
                navigate("/About");
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a href="#" className={style.headerLink}>
              Tour Packages
            </a>
          </li>
          <li>
            <a href="#" className={style.headerLink}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className={style.loginContainer}>
        <HeaderLangComp
          options={[
            { label: "Eng", value: "English" },
            { label: "Ger", value: "German" },
            { label: "Fre", value: "French" },
          ]}
        ></HeaderLangComp>
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
    </div>
  );
}

import React from "react";
import style from "./ModalSignPanel.module.css";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { createUserAsync } from "../../../../Slices/modal/modalSlice";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";

export default function ModalSignPanel({
  mainContent,
  secondContent,
  isLogin,
}) {
  const dispatch = useDispatch();
  return (
    <div className={style.signPnlCont}>
      <PrimaryBtn
        onClick={(e) => {
          if (isLogin) {
          } else {
            console.log("Hello!!!!!");
            dispatch(createUserAsync());
          }
        }}
      >
        {mainContent}
      </PrimaryBtn>
      <p>or</p>
      <button className={style.secBtn} onClick={(e) => e.preventDefault()}>
        <FcGoogle className={style.googleIcon} />
        <p>{secondContent}</p>
      </button>
    </div>
  );
}

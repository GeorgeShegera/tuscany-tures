import React from "react";
import style from "./ModalSignPanel.module.css";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { closeLogIn } from "../../../../Slices/modal/modalSlice";
import { loginUserAsync } from "../../../../Slices/user/UserSlice";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";

export default function ModalSignPanel({
  mainContent,
  secondContent,
  isLogin,
  data,
  successNotification,
  errorNotification,
}) {
  const dispatch = useDispatch();
  return (
    <div className={style.signPnlCont}>
      <PrimaryBtn
        id={isLogin ? "loginBtnSubmit" : ""}
        onClick={(e) => {
          if (isLogin) {
            dispatch(loginUserAsync(data)).then((resp) => {
              console.log(resp);
              console.log(typeof resp);
              if (resp.error) {
                errorNotification();
              } else {
                successNotification();
                dispatch(closeLogIn());
              }
            });
          } else {
            // dispatch(createUserAsync());
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

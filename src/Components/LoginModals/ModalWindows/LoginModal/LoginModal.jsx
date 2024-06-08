import React from "react";
import loginStyle from "./LoginModal.module.css";
import {
  selectOpenLogIn,
  openSignUp,
  closeLogIn,
  setEmailModalLogin,
  setPasswordModalLogin,
  openForgotPass,
  selectEmailModalLogin,
  selectPasswordModalLogin,
} from "../../../../Slices/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import ModalInput from "../../ModalComponents/ModalInput/ModalInput";
import ModalSignPanel from "../../ModalComponents/ModalSignPanel/ModalSignPanel";

function LoginModal() {
  const isOpen = useSelector(selectOpenLogIn);
  const email = useSelector(selectEmailModalLogin);
  const password = useSelector(selectPasswordModalLogin);
  const dispatch = useDispatch();
  return (
    <div className={`modal-wrapper ${isOpen ? "open" : "close"}`}>
      <form className={`${loginStyle.loginForm} modal`}>
        <div className="modal__header">
          <h2 className="modal__title">Login</h2>
          <RxCross2
            className="modal__cancel-btn"
            onClick={() => dispatch(closeLogIn())}
          />
        </div>
        <div className="modal__form-inputs">
          <ModalInput
            label={"Email Address"}
            placeholder={"Enter your email address"}
            isPassword={false}
            value={email}
            setValue={setEmailModalLogin}
          ></ModalInput>
          <ModalInput
            label={"Password"}
            placeholder={"Enter your password"}
            isPassword={true}
            value={password}
            setValue={setPasswordModalLogin}
          ></ModalInput>
          <button
            className={loginStyle.forgotPassBtn}
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeLogIn());
              dispatch(openForgotPass());
            }}
          >
            Forgot your password?
          </button>
        </div>
        <ModalSignPanel
          mainContent={"Sign In"}
          secondContent={"Sign In with Google"}
          isLogin={true}
        ></ModalSignPanel>
        <div className="modal__form-footer">
          Don't have an account?{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(openSignUp());
              dispatch(closeLogIn());
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;

import React from "react";
import myStyle from "./SignUpModal.module.css";
import { RxCross2 } from "react-icons/rx";
import ModalInput from "../../ModalComponents/ModalInput/ModalInput";
import ModalSignPanel from "../../ModalComponents/ModalSignPanel/ModalSignPanel";
import {
  closeSignUp,
  openLogIn,
  setNameModalSignUp,
  setEmailModalSignUp,
  setPasswordModalSignUp,
  selectOpenSignUp,
  selectNameModalSignUp,
  selectPasswordModalSignUp,
  selectEmailModalSignUp,
} from "../../../../Slices/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";

function SignUpModal() {
  const isOpen = useSelector(selectOpenSignUp);
  const name = useSelector(selectNameModalSignUp);
  const email = useSelector(selectEmailModalSignUp);
  const password = useSelector(selectPasswordModalSignUp);
  const dispatch = useDispatch();
  return (
    <div className={`modal-wrapper ${isOpen ? "open" : "close"}`}>
      <form className="modal">
        <div className="modal__header">
          <h2 className="modal__title">Create Account</h2>
          <RxCross2
            className="modal__cancel-btn"
            onClick={() => dispatch(closeSignUp())}
          />
        </div>
        <div className="modal__form-inputs">
          <ModalInput
            label={"Username"}
            placeholder={"Enter your username"}
            isPassword={false}
            value={name}
            setValue={setNameModalSignUp}
          ></ModalInput>
          <ModalInput
            label={"Email Address"}
            placeholder={"Enter your email adress"}
            isPassword={false}
            value={email}
            setValue={setEmailModalSignUp}
          ></ModalInput>
          <ModalInput
            label={"Password"}
            placeholder={"Enter your password"}
            isPassword={true}
            value={password}
            setValue={setPasswordModalSignUp}
          ></ModalInput>
          <div className={myStyle.privacyWrapper}>
            <input type="checkbox" />
            <p>
              I agree with <a href="">Terms</a> and <a href="">Privacy</a>
            </p>
          </div>
          <ModalSignPanel
            mainContent={"Sign Up"}
            secondContent={"Sign Up with Google"}
            isLogin={false}
          ></ModalSignPanel>
          <div className="modal__form-footer">
            Already have an account?{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(openLogIn());
                dispatch(closeSignUp());
              }}
            >
              {"  Log In"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpModal;

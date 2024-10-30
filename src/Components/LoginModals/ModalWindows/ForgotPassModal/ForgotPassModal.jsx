import React, { useRef } from "react";
import {
  selectOpenForgotPass,
  selectEmailModalReset,
  openLogIn,
  closeForgotPass,
  openCheckEmail,
  setEmailModalReset,
} from "../../../../Slices/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalInput from "../../ModalComponents/ModalInput/ModalInput";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";
import useScrollBlock from "../../../../Hooks/useScrollBlock";
import useClosePopUp from "../../../../Hooks/useClosePopUp";

function ForgotPassModal() {
  const isOpen = useSelector(selectOpenForgotPass);
  const email = useSelector(selectEmailModalReset);
  const dispatch = useDispatch();
  const modalWnd = useRef();
  useScrollBlock(isOpen);
  useClosePopUp(modalWnd, () => dispatch(closeForgotPass()));

  return (
    <div className={`modal-wrapper ${isOpen ? "open" : "close"}`}>
      <form ref={modalWnd} className="modal reset-pass__container">
        <div className="reset-pass__icon-key">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17C8.15196 16.9985 9.26816 16.5998 10.1604 15.8711C11.0526 15.1424 11.6663 14.1284 11.898 13H14V15H16V13H18V16H20V13H21V11H11.898C11.6663 9.87158 11.0526 8.85755 10.1604 8.1289C9.26816 7.40025 8.15196 7.00154 7 7C4.243 7 2 9.243 2 12C2 14.757 4.243 17 7 17ZM7 9C8.654 9 10 10.346 10 12C10 13.654 8.654 15 7 15C5.346 15 4 13.654 4 12C4 10.346 5.346 9 7 9Z"
              fill="#FA8B02"
            />
          </svg>
        </div>
        <h2 className="modal__title">Forgot Password</h2>
        <p className="reset-pass__sub-title">
          No worries, we'll send you reset instructions.
        </p>
        <ModalInput
          label={"Email Address"}
          placeholder={"Enter your email address"}
          isPassword={false}
          value={email}
          setValue={setEmailModalReset}
        ></ModalInput>
        <PrimaryBtn
          onClick={() => {
            dispatch(closeForgotPass());
            dispatch(openCheckEmail());
          }}
        >
          Reset Password
        </PrimaryBtn>
        <button
          className="reset-pass__back-btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch(closeForgotPass());
            dispatch(openLogIn());
          }}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 10C18 9.85795 17.9436 9.7217 17.8431 9.62124C17.7426 9.52078 17.6064 9.46434 17.4643 9.46434H4.82977L8.20134 6.09384C8.30193 5.99325 8.35843 5.85683 8.35843 5.71458C8.35843 5.57233 8.30193 5.4359 8.20134 5.33532C8.10075 5.23473 7.96433 5.17822 7.82208 5.17822C7.67983 5.17822 7.5434 5.23473 7.44282 5.33532L3.15738 9.62076C3.10749 9.67052 3.06791 9.72963 3.0409 9.79471C3.0139 9.85979 3 9.92956 3 10C3 10.0705 3.0139 10.1402 3.0409 10.2053C3.06791 10.2704 3.10749 10.3295 3.15738 10.3793L7.44282 14.6647C7.5434 14.7653 7.67983 14.8218 7.82208 14.8218C7.96433 14.8218 8.10075 14.7653 8.20134 14.6647C8.30193 14.5641 8.35843 14.4277 8.35843 14.2855C8.35843 14.1432 8.30193 14.0068 8.20134 13.9062L4.82977 10.5357H17.4643C17.6064 10.5357 17.7426 10.4793 17.8431 10.3788C17.9436 10.2783 18 10.1421 18 10Z"
              fill="#333333"
            />
          </svg>
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default ForgotPassModal;

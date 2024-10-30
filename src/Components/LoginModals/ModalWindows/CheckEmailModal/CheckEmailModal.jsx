import React, { useRef } from "react";
import {
  selectOpenCheckEmail,
  selectEmailModalReset,
  openLogIn,
  closeCheckEmail,
} from "../../../../Slices/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";
import useScrollBlock from "../../../../Hooks/useScrollBlock";
import useClosePopUp from "../../../../Hooks/useClosePopUp";

export default function CheckEmailModal() {
  const isOpen = useSelector(selectOpenCheckEmail);
  const email = useSelector(selectEmailModalReset);
  const modalWnd = useRef();
  const dispatch = useDispatch();
  useScrollBlock(isOpen);
  useClosePopUp(modalWnd, () => dispatch(closeCheckEmail()));

  return (
    <div className={`modal-wrapper ${isOpen ? "open" : "close"}`}>
      <form ref={modalWnd} className="modal reset-pass__container">
        <div className="reset-pass__icon-key">
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3811 10.4466L10.3813 10.4465L18.2504 5.81557V13.4C18.2504 13.8377 18.0766 14.2573 17.7671 14.5668C17.4577 14.8762 17.038 15.05 16.6004 15.05H3.40039C2.96278 15.05 2.5431 14.8762 2.23366 14.5668C1.92423 14.2573 1.75039 13.8377 1.75039 13.4V5.8179L9.61954 10.4465L9.62586 10.4503L9.63252 10.4533L9.73092 10.4989L9.73071 10.4994L9.74214 10.5036C9.84623 10.542 9.95754 10.5567 10.068 10.5469C10.1785 10.537 10.2855 10.5028 10.3811 10.4466ZM18.8278 1.57266C18.237 0.981923 17.4358 0.650049 16.6004 0.650049H3.40039C2.56496 0.650049 1.76374 0.981923 1.173 1.57266C0.582265 2.1634 0.250391 2.96462 0.250391 3.80005V13.4C0.250391 14.2355 0.582265 15.0367 1.173 15.6274C1.76374 16.2182 2.56496 16.55 3.40039 16.55H16.6004C17.4358 16.55 18.237 16.2182 18.8278 15.6274C19.4185 15.0367 19.7504 14.2355 19.7504 13.4V3.80005C19.7504 2.96462 19.4185 2.1634 18.8278 1.57266ZM3.40039 2.15005H16.6004C17.038 2.15005 17.4577 2.32389 17.7671 2.63332C18.0766 2.94276 18.2504 3.36244 18.2504 3.80005V4.07428L10.0004 8.93001L1.75039 4.07666V3.80005C1.75039 3.36244 1.92423 2.94276 2.23366 2.63332C2.5431 2.32389 2.96278 2.15005 3.40039 2.15005Z"
              fill="#FA8B02"
              stroke="#FA8B02"
              strokeWidth="0.3"
            />
          </svg>
        </div>
        <h2 className="modal__title">Check your email</h2>
        <p className="reset-pass__sub-title">
          We sent a password reset link to <span>{email}</span>
        </p>
        <PrimaryBtn>Open email app</PrimaryBtn>
        <p className="reset-pass__resend-email">
          Didn't receive the email?{" "}
          <button onClick={(e) => e.preventDefault()}>Click to resend</button>
        </p>
        <button
          className="reset-pass__back-btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch(openLogIn());
            dispatch(closeCheckEmail());
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

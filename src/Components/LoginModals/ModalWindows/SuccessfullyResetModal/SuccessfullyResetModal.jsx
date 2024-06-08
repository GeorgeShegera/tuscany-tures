import React from "react";
import {
  selectOpenSuccessReset,
  openSuccessReset,
  closeSuccessReset,
  openLogIn,
} from "../../../../Slices/modal/modalSlice";
import PrimaryBtn from "../../../PrimaryBtn/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SuccessfullyResetModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectOpenSuccessReset);
  const navigate = useNavigate();

  return (
    <div className={`modal-wrapper ${isOpen ? "open" : "close"}`}>
      <form className="modal reset-pass__container">
        <div className="reset-pass__icon-key">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.5L10 18.5L20 6.5"
              stroke="#FA8B02"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="modal__title">Set New Password</h2>
        <p className="reset-pass__sub-title">
          Your new password must be different from previously used password
        </p>
        <PrimaryBtn
          onClick={() => {
            dispatch(closeSuccessReset());
            navigate("/");
          }}
        >
          Continue
        </PrimaryBtn>
        <button
          className="reset-pass__back-btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch(closeSuccessReset());
            dispatch(openLogIn());
            navigate("/");
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

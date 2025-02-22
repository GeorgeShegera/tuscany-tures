import React from "react";
import style from "./BookingNavBtn.module.scss";

export default function BookingNavBtn({
  refLink,
  index,
  selectedNav,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      ref={refLink}
      className={`${style.numberBtnContainer} ${
        selectedNav >= index && style.numberBtnContainerSelected
      }`}
      style={{ gridColumn: index }}
    >
      <div className={style.numberBtn}>{index}</div>
      <p className={style.btnText}>Booking Details</p>
    </div>
  );
}

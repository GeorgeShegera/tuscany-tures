import React from "react";
import style from "./TicketsCounter.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export default function TicketsCounter({
  header,
  details,
  price,
  value,
  setValue,
}) {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h3 className={style.heading}>{header}</h3>
        {details && (
          <ul>
            {details.map((detail, i) => (
              <li
                key={`${detail.slice(0, 3)}${i}details`}
                className={style.detail}
              >
                {detail}
              </li>
            ))}
          </ul>
        )}
        <p className={style.price}>{price ? <>&#x20AC;{price}</> : "FREE"}</p>
      </div>

      <div className={style.counter}>
        <div
          className={style.counterBtnContainer}
          onClick={() => {
            if (value == 0) return;
            dispatch(setValue(value - 1));
          }}
        >
          <FaMinus className={style.counterBtn}></FaMinus>
        </div>
        <p className={style.counterValue}>{value}</p>
        <div
          className={style.counterBtnContainer}
          onClick={() => {
            console.log(value);
            dispatch(setValue(value + 1));
          }}
        >
          <FaPlus className={style.counterBtn}></FaPlus>
        </div>
      </div>
    </div>
  );
}

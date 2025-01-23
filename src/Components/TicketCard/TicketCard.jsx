import React from "react";
import style from "./TicketCard.module.scss";
import {
  TbCalendarCheck,
  TbCalendarUp,
  TbCalendarCancel,
  TbCalendarDollar,
} from "react-icons/tb";

export default function TicketCard({
  dateTime,
  img,
  paymentMethod,
  status,
  price,
  tourName,
}) {
  const getPaymentImg = function () {
    const value = paymentMethod.toLowerCase();
    if (
      value === "credit card" ||
      value === "visa" ||
      value === "master card"
    ) {
      return "creditCard.jpg";
    } else if (value === "paypal") {
      return "Paypal.jpg";
    }
  };

  const [date, time] = dateTime.split("T");
  return (
    <article className={style.card}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={img} alt="tour picture" />
      </div>

      <h3 className={`${style.heading} heading-tertiary`}>{tourName}</h3>
      <p className={style.date}>
        <svg className={style.icon}>
          <use xlinkHref="/svgs/tourSprite.svg#icon-tour_calendar"></use>
        </svg>
        {new Date(dateTime).toLocaleDateString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p className={style.time}>
        <svg className={style.icon}>
          <use xlinkHref="/svgs/tourSprite.svg#icon-tour_clock"></use>
        </svg>
        {time.slice(0, 5)}
      </p>

      <div className={style.payment}>
        <img src={`/imgs/PaymentImgs/${getPaymentImg()}`}></img>
        {paymentMethod}
      </div>
      <div className={style.price}>
        {Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "EUR",
        }).format(price)}
      </div>
      <div className={style.status}>
        {status === "Upcomming" ? (
          <TbCalendarUp className={style.statusIconUpcoming} />
        ) : status === "Ended" ? (
          <TbCalendarCheck className={style.statusIconEnded} />
        ) : (
          <TbCalendarCancel className={style.statusIconDangerous} />
        )}
        {status}
      </div>
    </article>
  );
}

import React, { useEffect, useState } from "react";
import style from "./TourCard.module.scss";
import { useNavigate } from "react-router-dom";

export default function TourCard({
  id,
  imgAddress,
  title,
  price,
  dateType,
  minGroupNumber,
  maxGroupNumber,
  description,
}) {
  const [descString, setDescString] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let resString = "";
    let threeDots = "...";
    for (const word of description.split(" ")) {
      if (resString.length + word.length + threeDots.length < 72) {
        resString += `${word} `;
      } else {
        resString += threeDots;
        break;
      }
    }
    setDescString(resString);
  }, []);

  return (
    <article className={`${style.card} tourCard`}>
      <div
        className={style.cardImg}
        style={{ backgroundImage: `url(${imgAddress})` }}
      ></div>
      <div className={style.cardWrapper}>
        <div className={style.cardContent}>
          <h3 className={style.title}>{title}</h3>
          <div className={style.priceContainer}>
            <p>from</p>
            <div className={style.price}>{price} &euro;</div>
          </div>
          <div className={style.infoContainer}>
            <div className={style.infoBlock}>
              <svg className={style.icon}>
                <use xlinkHref="/svgs/tourSprite.svg#icon-tour_calendar"></use>
              </svg>
              <p>{dateType}</p>
            </div>
            <div className={style.infoBlock}>
              <svg className={style.icon}>
                <use xlinkHref="/svgs/tourSprite.svg#icon-tour_group"></use>
              </svg>
              <p>
                {minGroupNumber}-{maxGroupNumber} PP
              </p>
            </div>
          </div>
          <p className={style.description}>{descString}</p>
        </div>
        <a
          href="#"
          className={style.moreBtn}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ left: 0, top: 0 });
            navigate(`/tours/${id}`);
          }}
        >
          Read More &#8594;
        </a>
      </div>
    </article>
  );
}

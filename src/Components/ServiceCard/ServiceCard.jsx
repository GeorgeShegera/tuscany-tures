import React from "react";
import style from "./ServiceCard.module.scss";

export default function ServiceCard({ img, caption, text }) {
  return (
    <figure className={style.card}>
      <img className={style.img} src={img} alt="Service photo" />
      <figcaption className={`heading-tertiary ${style.cardHeading}`}>
        {caption}
      </figcaption>
      <p className={style.text}>{text}</p>
    </figure>
  );
}

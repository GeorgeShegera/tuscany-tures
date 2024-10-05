import React from "react";
import style from "./Advantage.module.scss";

export default function Advantage({ text, iconName }) {
  return (
    <article className={style.advantage}>
      <svg className={style.icon}>
        <use
          xlinkHref={`/svgs/advantages.svg#icon-advantage_${iconName}`}
        ></use>
      </svg>
      <p className={style.caption}>{text}</p>
    </article>
  );
}

import React from "react";
import style from "./PackageCard.module.scss";
import { MdAppsOutage } from "react-icons/md";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

export default function PackageCard({ img, heading, price, mapTags }) {
  return (
    <article className={style.card}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={img} />
      </div>
      <div className={style.content}>
        <h3 className={style.heading}>{heading}</h3>
        <p className={style.price}>{price}</p>
        <ul className={style.tagList}>
          {[...mapTags].map(([key, value], index) => {
            return (
              <li className={style.tag}>
                <svg className={style.icon}>
                  <use
                    xlinkHref={`/svgs/cardSprite.svg#icon-card_${key}`}
                  ></use>
                </svg>
                <p>{value}</p>
              </li>
            );
          })}
        </ul>
        <PrimaryBtn IsWhite={true} onClick={(e) => {}}>
          Book Now
        </PrimaryBtn>
      </div>
    </article>
  );
}

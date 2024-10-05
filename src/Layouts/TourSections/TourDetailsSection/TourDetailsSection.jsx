import React from "react";
import style from "./TourDetailsSection.module.scss";
import { selectTour } from "../../../Slices/tours/toursSlice";
import { useSelector } from "react-redux";

function TourDetailsSection() {
  const tour = useSelector(selectTour);

  return (
    <section className={style.sectionDetails}>
      <div className={style.flexContainer}>
        <h2 className={`heading-secondary ${style.heading}`}>Details</h2>
        <p className={style.details}>{tour.details}</p>

        <ul className={style.infoList}>
          <li className={style.item}>
            <svg className={style.iconFill}>
              <use xlinkHref="/svgs/tourSprite.svg#icon-tour_group"></use>
            </svg>
            <p className={style.itemName}>Number of group: </p>
            <p>
              {tour.minNumberOfGroup}&ndash;{tour.maxNumberOfGroup}
            </p>
          </li>
          <li className={style.item}>
            <svg className={style.iconFill}>
              <use xlinkHref="/svgs/tourSprite.svg#icon-tour_duration"></use>
            </svg>
            <p className={style.itemName}>Duration:</p>
            <p>
              {Math.trunc(tour.duration / 60)} hours
              {tour.duration % 60 != 0
                ? ` and ${tour.duration % 60} minutes`
                : ""}
            </p>
          </li>
          <li className={style.item}>
            <svg className={style.iconStroke}>
              <use xlinkHref="/svgs/tourSprite.svg#icon-tour_location"></use>
            </svg>
            <p className={style.itemName}>Departuring and arriving areas:</p>
            <p>{tour.departureArea}</p>
          </li>
          <li className={style.item}>
            <svg className={style.iconFill}>
              <use xlinkHref="/svgs/cardSprite.svg#icon-card_guide"></use>
            </svg>
            <p className={style.itemName}>Guide service:</p>
            <p>{tour.guideService ? "Included" : "Excluded"}</p>
          </li>
          <li className={style.item}>
            <svg className={style.iconFill}>
              <use xlinkHref="/svgs/tourSprite.svg#icon-tour_language"></use>
            </svg>
            <p className={style.itemName}>Language: </p>
            <p>
              {tour.languages.map((lang, index) => (
                <span key={index}>{`${lang}${
                  index != tour.languages.length - 1 ? "," : ""
                } `}</span>
              ))}
            </p>
          </li>
          <li className={style.item}>
            <svg className={style.iconFill}>
              <use xlinkHref="/svgs/cardSprite.svg#icon-card_ticket"></use>
            </svg>
            <p className={style.itemName}>Entry Fees: </p>
            <p>{tour.entryFees}&#8364;</p>
          </li>
          <li className={style.item}>
            <svg className={style.iconFill}>
              <use xlinkHref="/svgs/cardSprite.svg#icon-card_bus"></use>
            </svg>
            <p className={style.itemName}>Entry Transportation: </p>
            <p>{tour.transport}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TourDetailsSection;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./TourHeroSection.module.scss";
import { selectTour } from "../../../Slices/tours/toursSlice.js";
import Calendar from "../../../Components/Calendar/Calendar.jsx";
import TimerSelector from "../../../Components/TimerSelector/TimeSelector.jsx";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn.jsx";

function TourHeroSection() {
  const navigation = useNavigate();
  const tour = useSelector(selectTour);
  const [imgStates, setImgsStates] = useState([true, false, false, false]);

  return (
    <section className={style.section}>
      <a
        href="#"
        className={style.backBtn}
        onClick={(e) => {
          e.preventDefault();
          navigation("/");
        }}
      >
        &larr; Back
      </a>
      <div className={style.heroContainer}>
        <div className={style.heroImgs}>
          {tour.imgs.map((img, index) => {
            if (index < 4) {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${img})` }}
                  className={`${style.heroImg} ${
                    imgStates[index] ? style.mainImg : ""
                  }`}
                  onClick={() => {
                    const newImgStates = imgStates.map((el, i) => {
                      return index === i;
                    });
                    setImgsStates(newImgStates);
                  }}
                >
                  &nbsp;
                </div>
              );
            }
          })}
        </div>
        <div className={style.heroContent}>
          <div className={style.contentInfo}>
            <h1 className="heading-primary">{tour.name}</h1>
            <div className={style.priceWrapper}>
              <span>from</span>
              <p>34 &euro;</p>
            </div>
            <p className={style.tourDescription}>{tour.description}</p>
          </div>
          <div className={style.dateTimeContainer}>
            <Calendar />
            <div className={style.buyTourContainer}>
              <TimerSelector></TimerSelector>
              <PrimaryBtn className="btn-shadow">Buy Now</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourHeroSection;

import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./TourHeroSection.module.scss";
import { selectTour } from "../../../Slices/tours/toursSlice.js";
import Calendar from "../../../Components/Calendar/Calendar.jsx";
import TimerSelector from "../../../Components/TimerSelector/TimeSelector.jsx";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn.jsx";
import { SectionRefsContext } from "../../../Providers/SectionRefsContext.js";
import { toast } from "react-toastify";
import {
  selectSelectedDate,
  selectSelectedTime,
  setSelectedTime,
  setSelectedDate,
} from "../../../Slices/calendar/CalendarSlice";
import { selectUserToken } from "../../../Slices/user/UserSlice.js";
import {
  selectDate,
  selectTime,
} from "../../../Slices/servicesForm/servicesFormSlice.js";

function TourHeroSection() {
  const tour = useSelector(selectTour);
  const selectedTime = useSelector(selectSelectedTime);
  const selectedDate = useSelector(selectSelectedDate);
  const userToken = useSelector(selectUserToken);
  const { setIntroSection } = useContext(SectionRefsContext);
  const [imgStates, setImgsStates] = useState([true, false, false, false]);
  const heroSection = useRef();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setIntroSection(heroSection.current);
  }, [heroSection]);

  return (
    <section className={style.section} ref={heroSection}>
      <a
        href="#"
        className={style.backBtn}
        onClick={(e) => {
          e.preventDefault();
          navigation(-1);
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
              <PrimaryBtn
                className="btn-shadow"
                onClick={() => {
                  const options = {
                    position: "bottom-right",
                    autoClose: 2_000,
                  };

                  if (userToken) {
                    toast.error("You have authorize", options);
                  } else if (selectedTime !== null && selectedDate !== null) {
                    const scheduleId = tour.schedules;
                    navigation(`/booking`);
                    dispatch(setSelectedTime(null));
                    dispatch(setSelectedDate(null));
                  } else {
                    toast.error("You must date and time", options);
                  }
                }}
              >
                Buy Now
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourHeroSection;

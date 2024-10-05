import React, { useEffect, useRef, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import InputMask from "react-input-mask";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css/mousewheel";
import "swiper/scss";
import {
  selectTime,
  setTime,
} from "../../Slices/servicesForm/servicesFormSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ServiceTimePicker({
  type,
  labelText,
  placeholder,
  className,
}) {
  const selectedTime = useSelector(selectTime);
  const [timeString, setTimeString] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const selectorList = useRef();
  const dispatch = useDispatch();
  const mask = [
    /[0-2]/,
    timeString[0] === "2" ? /[0-3]/ : /[0-9]/,
    ":",
    /[0-5]/,
    /[0-9]/,
  ];

  useEffect(() => {
    let handler = (e) => {
      if (!selectorList.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    if (timeString === "") return;
    const [hours, minutes] = timeString.split(":");
    const newDate = new Date();
    newDate.setMinutes(Number(minutes));
    newDate.setHours(Number(hours));

    dispatch(setTime(newDate.toString()));
  }, [timeString]);

  function hoursSlides() {
    let res = [];
    const [hours, minutes] = timeString.split(":");
    for (let i = 1; i < 24; i++) {
      const value = String(i).padStart(2, "0");
      res.push(
        <SwiperSlide
          key={`hours-slide-${i}`}
          className={`service-timer__cell ${
            value === hours && "service-timer__cell_selected"
          }`}
          onClick={(e) => {
            setTimeString(
              `${
                e.target.classList.contains("service-timer__cell_selected")
                  ? `00:${minutes}`
                  : `${value}:${minutes}`
              }`
            );
          }}
        >
          {value}
        </SwiperSlide>
      );
    }
    return res;
  }

  function minutesSlides() {
    let res = [];
    const [hours, minutes] = timeString.split(":");
    for (let i = 1; i < 60; i++) {
      const value = String(i).padStart(2, "0");
      res.push(
        <SwiperSlide
          key={`minutes-slide-${i}`}
          className={`service-timer__cell ${
            value === minutes && "service-timer__cell_selected"
          }`}
          onClick={(e) => {
            setTimeString(
              `${
                e.target.classList.contains("service-timer__cell_selected")
                  ? `${hours}:00`
                  : `${hours}:${value}`
              }`
            );
          }}
        >
          {value}
        </SwiperSlide>
      );
    }
    return res;
  }

  return (
    <div className={`service-input__wrapper ${className}`}>
      <label htmlFor={`#formInput${type}`} className="service-input__label">
        {labelText}
      </label>
      <div
        className="service-input__selector-wrapper"
        ref={selectorList}
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
      >
        <InputMask
          type="text"
          mask={mask}
          value={timeString}
          onChange={(e) => {
            setTimeString(e.target.value);
          }}
          placeholder={placeholder}
          id={`#formInput${type}`}
          className={`service-input__selector ${
            openDropdown ? "service-input__selector_open" : ""
          } ${selectedTime ? "service-input__selector_set-value" : ""}`}
        />

        <FaRegClock className="service-input__icon" />
        <div
          className="service-timer"
          ref={selectorList}
          onClick={(e) => e.stopPropagation()}
        >
          <Swiper
            className="service-timer__option"
            modules={[Mousewheel, FreeMode]}
            mousewheel={true}
            freeMode={{ enabled: true }}
            direction={"vertical"}
            loop={true}
            breakpoints={{
              948: {
                slidesPerView: 7,
              },
              528: {
                slidesPerView: 5,
              },
              0: {
                slidesPerView: 3,
              },
            }}
          >
            {hoursSlides()}
          </Swiper>
          <Swiper
            className="service-timer__option"
            modules={[Mousewheel, FreeMode]}
            mousewheel={true}
            freeMode={{ enabled: true }}
            direction={"vertical"}
            loop={true}
            slidesPerView={7}
            breakpoints={{
              948: {
                slidesPerView: 7,
              },
              528: {
                slidesPerView: 5,
              },
              0: {
                slidesPerView: 3,
              },
            }}
          >
            {minutesSlides()}
          </Swiper>
          <div
            className="service-timer__reset-btn"
            onClick={() => {
              setOpenDropdown(false);
              setTimeString("");
            }}
          >
            Reset
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import style from "./Calendar.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  daysOfWeek,
  changeDate,
  getDaysInMonth,
  getDaysOfWeek,
  getEmptyCells,
} from "./Calendar.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAvailableDates,
  selectSelectedDate,
  setSelectedDate,
  setAvailableDates,
} from "../../Slices/calendar/CalendarSlice.js";
import { selectTour } from "../../Slices/tours/toursSlice.js";

export default function Calendar() {
  const dispatch = useDispatch();
  const tour = useSelector(selectTour);
  const availableDates = useSelector(selectAvailableDates);
  const selectedDate = useSelector(selectSelectedDate);
  const [today, setToday] = useState(new Date());
  const [calendarMonth, setCalendarMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  useEffect(() => {
    // Find available dates
    let newAvailableDates = [];

    for (const schedule of tour.schedules) {
      let curDate = new Date(Date.parse(schedule.dateTime));
      if (schedule.type === null) {
        newAvailableDates.push(curDate);
      } else if (schedule.type.toUpperCase() == "EVERY DAY") {
        newAvailableDates = newAvailableDates.concat(
          getDaysInMonth(
            calendarMonth.getFullYear(),
            calendarMonth.getMonth(),
            curDate.getHours(),
            curDate.getMinutes()
          )
        );
      } else if (schedule.type.toUpperCase() == "MONDAY") {
        newAvailableDates = newAvailableDates.concat(
          getDaysOfWeek(
            calendarMonth.getFullYear(),
            calendarMonth.getMonth(),
            curDate.getHours(),
            curDate.getMinutes(),
            1
          )
        );
      } else if (schedule.type.toUpperCase() == "FRIDAY") {
        newAvailableDates = newAvailableDates.concat(
          getDaysOfWeek(
            calendarMonth.getFullYear(),
            calendarMonth.getMonth(),
            curDate.getHours(),
            curDate.getMinutes(),
            5
          )
        );
      } else if (schedule.type == "at your choice") {
        newAvailableDates.push(new Date(Date.parse(calendarMonth)));
      }
    }

    dispatch(
      setAvailableDates(newAvailableDates.map((avDate) => avDate.toString()))
    );
  }, [calendarMonth, selectedDate, tour]);

  function renderDays() {
    const days = [];
    const firstDayOfMonth = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() + 1,
      0
    );

    // Adding empty cells
    const emptyCells = days.push(
      getEmptyCells(
        firstDayOfMonth.getDay(),
        `${style.calendarCell} ${style.emptyCell}`
      )
    );

    // Adding days
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      let className = `${style.calendarCell} ${style.day}`;

      const isCurMonth = today.getMonth() == calendarMonth.getMonth();
      let isAvailable = false;
      let serializedSelDate = new Date(selectedDate);

      if (
        i === serializedSelDate.getDate() &&
        calendarMonth.getMonth() == serializedSelDate.getMonth() &&
        calendarMonth.getFullYear() == serializedSelDate.getFullYear()
      ) {
        className += ` ${style.selectedDate}`;
      }
      if (i < today.getDate() && isCurMonth) {
        className += ` ${style.prevDay}`;
      } else if (isCurMonth && i == today.getDate()) {
        className += ` ${style.curDay}`;
      } else if (
        availableDates.some((availableDate) => {
          const serAvDate = new Date(availableDate);
          return (
            serAvDate.getDate() == i &&
            serAvDate.getMonth() == calendarMonth.getMonth() &&
            serAvDate.getFullYear() == calendarMonth.getFullYear()
          );
        })
      ) {
        isAvailable = true;
        className += ` ${style.availableDay}`;
      }

      days.push(
        <div
          key={i}
          className={`${className}`}
          onClick={() => {
            const serSelectedDate = new Date(selectedDate);
            if (
              selectedDate !== null &&
              i === serSelectedDate.getDate() &&
              calendarMonth.getMonth() === serSelectedDate.getMonth() &&
              calendarMonth.getFullYear() === serSelectedDate.getFullYear()
            ) {
              dispatch(setSelectedDate(null));
            } else if (isAvailable) {
              dispatch(
                setSelectedDate(
                  new Date(
                    calendarMonth.getFullYear(),
                    calendarMonth.getMonth(),
                    i
                  ).toString()
                )
              );
            }
          }}
        >
          {i}
        </div>
      );
    }

    return days;
  }

  return (
    <div className={style.calendarContainer}>
      <p className={style.selectDate}>Select a date</p>

      <div className={style.calendar}>
        <div className={style.calendarHeader}>
          <p className={style.monthYear}>
            {calendarMonth.toLocaleDateString("default", { month: "long" })}{" "}
            {calendarMonth.getFullYear()}
          </p>{" "}
          <div className={style.monthBtns}>
            <button
              className={`${style.monthBtn} ${
                calendarMonth.getMonth() <= today.getMonth()
                  ? `${style.btnDisabled}`
                  : ""
              }`}
              onClick={() => {
                if (calendarMonth.getMonth() > today.getMonth())
                  changeDate(calendarMonth, -1, setCalendarMonth);
              }}
            >
              <IoIosArrowBack />
            </button>
            <button
              className={style.monthBtn}
              onClick={() => {
                changeDate(calendarMonth, 1, setCalendarMonth);
              }}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className={style.calendarGrid}>
          {daysOfWeek.map((el, index) => (
            <div
              key={index}
              className={`${style.calendarCell} ${style.dayOfWeek}`}
            >
              {el}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
}

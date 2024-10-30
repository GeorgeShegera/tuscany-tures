import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import {
  selectDate,
  setDate,
} from "../../Slices/servicesForm/servicesFormSlice";
import {
  daysOfWeekShort,
  getCalendarCells,
  changeDate,
} from "../Calendar/Calendar.js";
import { LuCalendarDays } from "react-icons/lu";
import useClosePopUp from "../../Hooks/useClosePopUp.js";

export default function DateSelector({
  type,
  labelText,
  placeholder,
  className,
}) {
  const [openDropdown, setOpenDropdown] = useState();
  const selectorList = useRef();
  const dateInput = useRef();
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectDate);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [monthCells, setMonthCells] = useState();

  useClosePopUp(dateInput, () => setOpenDropdown(false));

  useEffect(() => {
    if (!calendarDate) return;
    setMonthCells(
      getCalendarCells(
        calendarDate,
        new Date(selectedDate),
        setDate,
        dispatch,
        "service-calendar__cell_empty",
        "service-calendar__cell_disable",
        "service-calendar__cell_cur",
        "service-calendar__cell",
        "service-calendar__cell_selected"
      )
    );
  }, [calendarDate, selectedDate]);

  const checkSetValue = () => selectedDate !== null;

  function formatDate(date) {
    date = new Date(date).toLocaleString("default", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    const [month, day, year] = date.split("/");
    return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
  }

  return (
    <div className={`service-input__wrapper ${className}`}>
      <label htmlFor={`#form${type}`} className="service-input__label">
        {labelText}
      </label>
      <div
        className="service-input__selector-wrapper"
        onClick={() => {
          setOpenDropdown(!openDropdown);
        }}
        ref={dateInput}
      >
        <div
          id={`#form${type}`}
          className={`service-input__selector ${
            openDropdown ? "service-input__selector_open" : ""
          } ${checkSetValue() ? "service-input__selector_set-value" : ""}`}
        >
          {!checkSetValue() ? placeholder : formatDate(selectedDate)}
          <LuCalendarDays className="service-input__icon"></LuCalendarDays>
        </div>
        <div
          className="service-calendar"
          ref={selectorList}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="service-calendar__header">
            <div className="service-calendar__current-month">
              {calendarDate.toLocaleDateString("default", {
                year: "numeric",
                month: "long",
              })}
            </div>
            <div className="service-calendar__pagination">
              <SlArrowLeft
                className="service-calendar__arrow"
                onClick={() => {
                  if (calendarDate.getMonth() !== new Date().getMonth()) {
                    changeDate(calendarDate, -1, setCalendarDate);
                  }
                }}
              />
              <SlArrowRight
                className="service-calendar__arrow"
                onClick={() => {
                  if (calendarDate.getMonth() < new Date().getMonth() + 2) {
                    changeDate(calendarDate, 1, setCalendarDate);
                  }
                }}
              />
            </div>
          </div>
          <div className="service-calendar__body">
            {daysOfWeekShort.map((dayOfWeek, index) => (
              <div
                className="service-calendar__week-day"
                key={`${index}-day-of-week-${dayOfWeek}`}
              >
                {dayOfWeek}
              </div>
            ))}
            {monthCells}
          </div>
        </div>
      </div>
    </div>
  );
}

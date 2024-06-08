import React, { useEffect, useState } from "react";
import style from "./TimeSelector.module.sass";
import {
  selectAvailableDates,
  selectSelectedDate,
  selectSelectedTime,
  setSelectedTime,
} from "../../Slices/calendar/CalendarSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiClock2 } from "react-icons/ci";

function TimeSelector() {
  const selectedDate = useSelector(selectSelectedDate);
  const availableDates = useSelector(selectAvailableDates);
  const selectedTime = useSelector(selectSelectedTime);
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpenTimePicker(false);
    dispatch(setSelectedTime(null));
  }, [selectedDate]);

  return (
    <div className={style.selectTimeContainer}>
      <p className={style.header}>Time</p>
      <div
        className={`${style.selectTime} ${
          selectedDate === null ? style.disableSelector : ""
        }`}
        onClick={() => {
          if (selectedDate === null) return;
          setOpenTimePicker(!openTimePicker);
        }}
      >
        <div className={`${style.timeContent}`}>
          {selectedTime === null ? "Select the time" : selectedTime}
          <CiClock2 className={style.timeIcon}></CiClock2>
        </div>
        <ul
          className={`${style.timeList} ${
            selectedDate !== null && openTimePicker
              ? style.visible
              : style.hidden
          }`}
        >
          {availableDates
            .filter((availableDate) => {
              const deSerAvailabeDate = new Date(availableDate);
              const deSerSelectedDate = new Date(selectedDate);
              return (
                deSerAvailabeDate.getDate() == deSerSelectedDate.getDate() &&
                deSerAvailabeDate.getMonth() == deSerSelectedDate.getMonth() &&
                deSerAvailabeDate.getFullYear() ==
                  deSerSelectedDate.getFullYear()
              );
            })
            .map((filteredDate, index) => {
              const deSerFilteredDate = new Date(filteredDate);
              return (
                <div
                  key={index}
                  className={style.timeListItem}
                  onClick={(e) => {
                    dispatch(setSelectedTime(e.target.innerHTML));
                  }}
                >{`${String(deSerFilteredDate.getHours()).padStart(
                  2,
                  "0"
                )}:${String(deSerFilteredDate.getMinutes()).padStart(
                  2,
                  "0"
                )}`}</div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default TimeSelector;

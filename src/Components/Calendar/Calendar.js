import {
  setAvailableDates,
  setSelectedDate,
} from "../../Slices/calendar/CalendarSlice";

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const daysOfWeekShort = ["S", "M", "T", "W", "T", "F", "S"];

export function changeDate(date, value, setDate) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + value);
  setDate(newDate);
}

export function getDaysInMonth(year, month, hour, minutes) {
  let date = new Date(year, month, 1, hour, minutes);
  let result = [];
  while (date.getMonth() === month) {
    if (new Date() < date) result.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
}

export function getCalendarCells(
  calDate,
  selectedDate,
  setSelectedDate,
  dispatch,
  clEmptyCell,
  clPastDate,
  clCurDate,
  clAvailDate,
  clSelDate
) {
  const curDate = new Date();
  curDate.setHours(0, 0, 0, 0);
  let result = [];
  const firstDateOfMonth = new Date(
    calDate.getFullYear(),
    calDate.getMonth(),
    1
  );
  const selDateWithoutTime = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate()
  );
  let tempDate = new Date(firstDateOfMonth);

  result.push(getEmptyCells(firstDateOfMonth.getDay(), clEmptyCell));

  let tempClass = "";
  let date = 1;
  while (tempDate.getMonth() == calDate.getMonth()) {
    tempClass = "";
    if (tempDate.getTime() < curDate.getTime()) {
      tempClass += clPastDate;
    } else if (
      selDateWithoutTime !== null &&
      tempDate.getTime() === selDateWithoutTime.getTime()
    ) {
      tempClass += clSelDate;
    } else if (tempDate.getTime() === curDate.getTime()) {
      tempClass += clCurDate;
    } else if (tempDate.getTime() > curDate.getTime()) {
      tempClass += clAvailDate;
    }
    console.log(tempClass, selectedDate !== null, tempDate, selectedDate);

    result.push(
      <div
        key={`calendar-cell__${tempDate.getDate()}`}
        className="service-calendar__cell-wrapper"
      >
        <button
          className={`${tempClass}`}
          onClick={(e) => {
            e.preventDefault();
            if (e.target.classList.contains(clSelDate)) {
              dispatch(setSelectedDate(null));
            } else if (e.target.classList.contains(clAvailDate)) {
              dispatch(
                setSelectedDate(
                  new Date(
                    calDate.getFullYear(),
                    calDate.getMonth(),
                    e.target.innerHTML,
                    selectedDate.getHours(),
                    selectedDate.getMinutes()
                  ).toString()
                )
              );
            }
          }}
        >
          {tempDate.getDate()}
        </button>
      </div>
    );
    date++;
    tempDate.setDate(tempDate.getDate() + 1);
  }

  return result;
}

export function getDaysOfWeek(year, month, hour, minutes, dayOfWeek) {
  let date = new Date(year, month, 1, hour, minutes);
  let result = [];
  while (date.getMonth() === month) {
    if (new Date() < date && dayOfWeek == date.getDay()) {
      result.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }
  return result;
}

export function getEmptyCells(firstDayOfMonth, className) {
  const emptyDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptyDays.push(
      <div key={`empty-cell-${i}`} className={`${className}`}>
        &nbsp;
      </div>
    );
  }
  return emptyDays;
}

import {
  setAvailableDates,
  setSelectedDate,
} from "../../Slices/calendar/CalendarSlice";

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

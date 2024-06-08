import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Slices/modal/modalSlice";
import calendarReducer from "../Slices/calendar/CalendarSlice";
import tours from "../Slices/tours/toursSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    calendar: calendarReducer,
    tours: tours,
  },
});

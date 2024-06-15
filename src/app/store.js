import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Slices/modal/modalSlice";
import calendarReducer from "../Slices/calendar/CalendarSlice";
import tours from "../Slices/tours/toursSlice";
import comments from "../Slices/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    calendar: calendarReducer,
    tours: tours,
    comments: comments,
  },
});

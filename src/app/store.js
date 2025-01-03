import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Slices/modal/modalSlice";
import calendarReducer from "../Slices/calendar/CalendarSlice";
import tours from "../Slices/tours/toursSlice";
import comments from "../Slices/comments/commentsSlice";
import services from "../Slices/servicesForm/servicesFormSlice";
import user from "../Slices/user/UserSlice";
import orders from "../Slices/orders/orders";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    calendar: calendarReducer,
    tours: tours,
    comments: comments,
    services: services,
    user: user,
    orders: orders,
  },
});

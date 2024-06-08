import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availableDates: [],
  selectedDate: null,
  selectedTime: null,
};

const CalendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setAvailableDates: (state, action) => {
      state.availableDates = action.payload;
    },

    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },

    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
      console.log(state.selectedTime);
    },
  },
});

export const { setAvailableDates, setSelectedDate, setSelectedTime } =
  CalendarSlice.actions;

export const selectAvailableDates = (state) => state.calendar.availableDates;
export const selectSelectedDate = (state) => state.calendar.selectedDate;
export const selectSelectedTime = (state) => state.calendar.selectedTime;

export default CalendarSlice.reducer;

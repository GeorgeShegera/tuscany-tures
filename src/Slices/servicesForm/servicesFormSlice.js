import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameSurname: "",
  email: "",
  telephone: "",
  serviceType: null,
  date: null,
  time: null,
};

const servicesFormSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setNameSurname: (state, action) => {
      state.nameSurname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.email;
    },
    setTelephone: (state, action) => {
      state.telephone = action.payload;
    },
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const {
  setNameSurname,
  setEmail,
  setTelephone,
  setServiceType,
  setDate,
  setTime,
} = servicesFormSlice.actions;

export const selectNameSurname = (state) => state.services.nameSurname;
export const selectEmail = (state) => state.services.email;
export const selectTelephone = (state) => state.services.telephone;
export const selectServiceType = (state) => state.services.serviceType;
export const selectDate = (state) => state.services.date;
export const selectTime = (state) => state.services.time;

export default servicesFormSlice.reducer;

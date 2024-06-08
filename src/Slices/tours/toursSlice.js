import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTourCards, getTour } from "./toursAPI";

const initialState = {
  tourCards: [],
  tour: {
    imgs: [],
    dates: [],
    schedules: [],
    languages: [],
  },
};

export const initTourCards = createAsyncThunk("tour/getTourCards", async () => {
  const response = await getTourCards();
  return response.data;
});

export const initTour = createAsyncThunk("tour/getTour", async (tourId) => {
  const response = await getTour(tourId);
  console.log("Response", response);
  return response.data;
});

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(initTourCards.fulfilled, (state, action) => {
      state.tourCards = action.payload;
    });

    builder.addCase(initTour.fulfilled, (state, action) => {
      state.tour = action.payload;
    });
  },
});

export const {} = toursSlice.actions;

export const selectTourCards = (state) => state.tours.tourCards;
export const selectTour = (state) => state.tours.tour;

export default toursSlice.reducer;

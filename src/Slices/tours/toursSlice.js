import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularTourCards, getTour } from "./toursAPI";

const initialState = {
  popularTourCards: [],

  tour: {
    imgs: [],
    dates: [],
    schedules: [],
    languages: [],
  },

  pagPage: 1,
  cardsCount: 8,
  tourCards: [],
};

export const initPopularTourCards = createAsyncThunk(
  "tour/getPopularTourCards",
  async (count) => {
    const response = await getPopularTourCards(count);
    return response.data;
  }
);

export const initTour = createAsyncThunk("tour/getTour", async (tourId) => {
  const response = await getTour(tourId);
  return response.data;
});

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(initPopularTourCards.fulfilled, (state, action) => {
      state.popularTourCards = action.payload;
    });

    builder.addCase(initTour.fulfilled, (state, action) => {
      state.tour = action.payload;
    });
  },
});

export const {} = toursSlice.actions;

export const selectPopularTourCards = (state) => state.tours.popularTourCards;
export const selectTour = (state) => state.tours.tour;

export default toursSlice.reducer;

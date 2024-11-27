import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularTourCards, getTour, getTourCards } from "./toursAPI";

const initialState = {
  popularTourCards: [],

  tour: {
    imgs: [],
    dates: [],
    schedules: [],
    languages: [],
  },

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

export const initTourCards = createAsyncThunk(
  "tour/getTourCards",
  async ({ pageNumber, cardsCount, searchName }) => {
    const response = await getTourCards({ pageNumber, cardsCount, searchName });
    return response.data;
  }
);

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

    builder.addCase(initTourCards.fulfilled, (state, action) => {
      state.tourCards = action.payload;
    });
  },
});

export const {} = toursSlice.actions;

export const selectPopularTourCards = (state) => state.tours.popularTourCards;
export const selectTour = (state) => state.tours.tour;
export const selectTourCards = (state) => state.tours.tourCards;

export default toursSlice.reducer;

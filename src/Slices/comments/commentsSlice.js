import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getComment } from "./commentsAPI.js";
const initialState = {
  comments: [],
};

export const initComments = createAsyncThunk(
  "comment/getComment",
  async (commentId) => {
    const response = await getComment(commentId);
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(initComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const {} = commentsSlice.actions;

export const selectComments = (state) => state.comments.comments;

export default commentsSlice.reducer;

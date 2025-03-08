import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postAccount, loginApiAsync } from "./UserAPI";

const initialState = {
  userToken: JSON.parse(localStorage.getItem("userToken")),
};

export const loginUserAsync = createAsyncThunk(
  "modalAPI/loginApiAsync",
  async ({ login, password }) => {
    const response = await loginApiAsync(login, password);
    response.expires = new Date(response.expires).getTime();
    console.log("expires", response);
    return response;
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    unAuthrize: (state) => {
      state.userToken = null;
      localStorage.removeItem("userToken");
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(createUserAsync.fulfilled, () => {});
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      localStorage.setItem("userToken", JSON.stringify(action.payload));
      state.userToken = action.payload;
    });
  },
});

export const { unAuthrize } = UserSlice.actions;
export const selectUserToken = (state) => state.user.userToken;

export default UserSlice.reducer;

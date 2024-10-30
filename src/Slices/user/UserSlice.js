import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postAccount, loginApiAsync } from "./UserAPI";

const initialState = {
  userToken: null,
};

// Only one element could be passed
// export const createUserAsync = createAsyncThunk(
//   "modal/modalAPI",
//   async (nameModalSignUp, passwordModalSignUp, emailModalSignUp) => {
//     const response = await postAccount(
//       nameModalSignUp,
//       passwordModalSignUp,
//       emailModalSignUp
//     );
//     return response;
//   }
// );

export const loginUserAsync = createAsyncThunk(
  "modalAPI/loginApiAsync",
  async ({ login, password }) => {
    const response = await loginApiAsync(login, password);
    return response;
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // builder.addCase(createUserAsync.fulfilled, () => {});
    builder.addCase(loginUserAsync.fulfilled, (state, action) => {
      console.log(state, action);
      state.userToken = action.payload;
    });
  },
});

export const {} = UserSlice.actions;
export const selectUserToken = (state) => state.user.userToken;

export default UserSlice.reducer;

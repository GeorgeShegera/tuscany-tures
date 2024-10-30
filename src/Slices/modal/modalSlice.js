import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSignUp: false,
  openLogIn: false,
  openForgotPass: false,
  openCheckEmail: false,
  openNewPass: false,
  openSuccessReset: false,
  nameModalSignUp: "",
  emailModalSignUp: "",
  passwordModalSignUp: "",
  emailModalLogin: "",
  passwordModalLogin: "",
  emailModalReset: "",
  newPasswordModalNewPass: "",
  confirmPasswordModalNewPass: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUp: (state) => {
      state.openSignUp = true;
    },
    closeSignUp: (state) => {
      state.openSignUp = false;
    },

    openLogIn: (state) => {
      state.openLogIn = true;
    },
    closeLogIn: (state) => {
      state.openLogIn = false;
    },

    openForgotPass: (state) => {
      state.openForgotPass = true;
    },
    closeForgotPass: (state) => {
      state.openForgotPass = false;
    },

    openCheckEmail: (state) => {
      state.openCheckEmail = true;
    },
    closeCheckEmail: (state) => {
      state.openCheckEmail = false;
    },

    openNewPass: (state) => {
      state.openNewPass = true;
    },
    closeNewPass: (state) => {
      state.openNewPass = false;
    },

    openSuccessReset: (state) => {
      state.openSuccessReset = true;
    },
    closeSuccessReset: (state) => {
      state.openSuccessReset = false;
    },

    setNameModalSignUp: (state, action) => {
      state.nameModalSignUp = action.payload;
    },
    setEmailModalSignUp: (state, action) => {
      state.emailModalSignUp = action.payload;
    },
    setPasswordModalSignUp: (state, action) => {
      state.passwordModalSignUp = action.payload;
    },
    setEmailModalLogin: (state, action) => {
      state.emailModalLogin = action.payload;
    },
    setPasswordModalLogin: (state, action) => {
      state.passwordModalLogin = action.payload;
    },
    setEmailModalReset: (state, action) => {
      state.emailModalReset = action.payload;
    },
    setNewPasswordModalNewPass: (state, action) => {
      state.newPasswordModalNewPass = action.payload;
    },
    setConfirmPasswordModalNewPass: (state, action) => {
      state.confirmPasswordModalNewPass = action.payload;
    },
  },
});

export const {
  openSignUp,
  closeSignUp,
  openLogIn,
  closeLogIn,
  openForgotPass,
  closeForgotPass,
  openCheckEmail,
  closeCheckEmail,
  openNewPass,
  closeNewPass,
  openSuccessReset,
  closeSuccessReset,
  setNameModalSignUp,
  setEmailModalSignUp,
  setPasswordModalSignUp,
  setEmailModalLogin,
  setPasswordModalLogin,
  setEmailModalReset,
  setNewPasswordModalNewPass,
  setConfirmPasswordModalNewPass,
} = modalSlice.actions;

export const selectOpenSignUp = (state) => state.modal.openSignUp;
export const selectOpenLogIn = (state) => state.modal.openLogIn;
export const selectOpenForgotPass = (state) => state.modal.openForgotPass;
export const selectOpenCheckEmail = (state) => state.modal.openCheckEmail;
export const selectOpenNewPass = (state) => state.modal.openNewPass;
export const selectOpenSuccessReset = (state) => state.modal.openSuccessReset;

export const selectNameModalSignUp = (state) => state.modal.nameModalSignUp;
export const selectEmailModalSignUp = (state) => state.modal.emailModalSignUp;
export const selectPasswordModalSignUp = (state) =>
  state.modal.passwordModalSignUp;
export const selectEmailModalLogin = (state) => state.modal.emailModalLogin;
export const selectPasswordModalLogin = (state) =>
  state.modal.passwordModalLogin;
export const selectEmailModalReset = (state) => state.modal.emailModalReset;
export const selectNewPasswordModalNewPass = (state) =>
  state.modal.newPasswordModalNewPass;
export const selectConfirmPasswordModalNewPass = (state) =>
  state.modal.confirmPasswordModalNewPass;

export default modalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initLoginState = {
  email: "",
  name: "",
};

const initialState = {
  loginUser: initLoginState,
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loginUser = action.payload;
      state.isLoggedIn = true;
    },
    loginFail: (state) => {
      state.loginUser = initLoginState;
      state.isLoggedIn = false;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, loginFail, logoutUser } = loginSlice.actions;

export const onLoginUser = () => async (dispatch) => {
  try {
  } catch (e) {}
};

export const onUserLogout = () => async (dispatch) => {
  dispatch(logoutUser());
};
export default loginSlice.reducer;

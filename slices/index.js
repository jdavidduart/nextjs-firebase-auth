import { createSlice } from "@reduxjs/toolkit";
import Firebase from "../firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
const initialState = {
  user: null,
  loading: false,
};

export const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const { login, logout, loading } = userAuthSlice.actions;
export const actLogin =
  ({ email, password }, onSuccess, onFailure) =>
  async (dispatch) => {
    try {
      dispatch(loading(true));
      const auth = getAuth(Firebase);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      dispatch(login({ user: userCredential.user.email }));
      onSuccess && onSuccess();
    } catch (e) {
      dispatch(loading(false));
      onFailure && onFailure();
    }
  };
export const actLogout = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const auth = getAuth(Firebase);
    await signOut(auth);
    dispatch(logout());
  } catch (e) {
    dispatch(loading(false));
  }
};
export default userAuthSlice.reducer;

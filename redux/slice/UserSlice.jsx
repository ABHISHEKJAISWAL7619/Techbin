import { createSlice } from '@reduxjs/toolkit';

// Avoid accessing localStorage on the server
let details = null;
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem("TechbinAuth");
  if (stored) {
    details = JSON.parse(stored);
  }
}

const initialState = {
  login: details ? details.login : false,
  user: details ? details.user : '',
  token: details ? details.token : ''
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setstate: (state, action) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'TechbinAuth',
          JSON.stringify({
            login: true,
            token: action.payload.token,
            user: action.payload.user
          })
        );
      }
      state.login = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logout: (state) => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem("TechbinAuth");
      }
      state.login = false;
      state.user = "";
      state.token = "";
    }
  },
});

export const { setstate, logout } = UserSlice.actions;
export default UserSlice.reducer;

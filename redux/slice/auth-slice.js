"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const NEXT_PUBLIC_API_URL = "https://tech-bin.devloperhemant.com/";
console.log(NEXT_PUBLIC_API_URL);

// Login Thunk
export const loginuser = createAsyncThunk(
  "auth/loginuser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${NEXT_PUBLIC_API_URL}api/auth/login`,
        formData
      );
      console.log(data);

      const role = data?.user?.role;
      // if (role !== "admin") {
      //   return rejectWithValue("You are not authorized to access this page");
      // }
      console.log(role);
      const token = data.token;
      console.log(token);

      Cookies.set("token", token, { expires: 6 });
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Otp sent failed"
      );
    }
  }
);

const token = Cookies.get("token");

const initialState = {
  user: {},
  token: token || null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove("token");
      state.user = {};
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(loginuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

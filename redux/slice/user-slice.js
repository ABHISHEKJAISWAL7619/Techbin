"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const NEXT_PUBLIC_API_URL = "https://tech-bin.devloperhemant.com/";
console.log(NEXT_PUBLIC_API_URL);

// Login Thunk
export const getallusers = createAsyncThunk(
  "users/getall",
  async (_, { rejectWithValue }) => {
    const token = Cookies.get("token");
    if (!token) {
      return rejectWithValue({ message: "Unauthorized: No token found" });
    }

    try {
      const { data } = await axios.get(
        `
        ${NEXT_PUBLIC_API_URL}api/admin/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("user fetched:", data);
      return data;
    } catch (error) {
      const errRes = error.response?.data || { message: error.message };
      console.error("users fetched Error:", errRes);
      return rejectWithValue(errRes);
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

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getallusers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallusers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(getallusers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export default userSlice.reducer;

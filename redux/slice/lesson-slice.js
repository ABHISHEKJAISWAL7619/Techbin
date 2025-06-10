"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const NEXT_PUBLIC_API_URL = "https://tech-bin.devloperhemant.com/";
console.log(NEXT_PUBLIC_API_URL);

// Login Thunk
export const craetelesson = createAsyncThunk(
  "lesson/craete",
  async (formData, { rejectWithValue }) => {
    const token = Cookies.get("token");
    if (!token) {
      return rejectWithValue({ message: "Unauthorized: No token found" });
    }

    try {
      const { data } = await axios.post(
        `
        ${NEXT_PUBLIC_API_URL}api/admin/lessons`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("lesson craeted:", data);
      return data;
    } catch (error) {
      const errRes = error.response?.data || { message: error.message };
      console.error("lesson created error:", errRes);
      return rejectWithValue(errRes);
    }
  }
);

export const getlessonsbycourseId = createAsyncThunk(
  "lessons/getall",
  async (course, { rejectWithValue }) => {
    const token = Cookies.get("token");
    if (!token) {
      return rejectWithValue({ message: "Unauthorized: No token found" });
    }

    try {
      const { data } = await axios.get(
        `
        ${NEXT_PUBLIC_API_URL}api/admin/course/${course}/lessons`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("lessons fetched:", data);
      return data;
    } catch (error) {
      const errRes = error.response?.data || { message: error.message };
      console.error("lessons fetched Error:", errRes);
      return rejectWithValue(errRes);
    }
  }
);

export const deletelessonsbyId = createAsyncThunk(
  "lessons/delete",
  async (lessonId, { rejectWithValue }) => {
    const token = Cookies.get("token");
    if (!token) {
      return rejectWithValue({ message: "Unauthorized: No token found" });
    }

    try {
      const { data } = await axios.delete(
        `
        ${NEXT_PUBLIC_API_URL}api/admin/lessons/${lessonId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("lessons deleted:", data);
      return data;
    } catch (error) {
      const errRes = error.response?.data || { message: error.message };
      console.error("lessons deleted Error:", errRes);
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

export const lessonSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(craetelesson.pending, (state) => {
        state.loading = true;
      })
      .addCase(craetelesson.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(craetelesson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export default lessonSlice.reducer;

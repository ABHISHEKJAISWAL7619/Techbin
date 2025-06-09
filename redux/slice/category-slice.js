"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const NEXT_PUBLIC_API_URL = "https://tech-bin.devloperhemant.com/";
console.log(NEXT_PUBLIC_API_URL);

// Login Thunk
export const getallcategory = createAsyncThunk(
  "category/getall",
  async (_, { rejectWithValue }) => {
    const token = Cookies.get("token");
    if (!token) {
      return rejectWithValue({ message: "Unauthorized: No token found" });
    }

    try {
      const { data } = await axios.get(
        `
        ${NEXT_PUBLIC_API_URL}api/admin/menu/category`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("category fetched:", data);
      return data;
    } catch (error) {
      const errRes = error.response?.data || { message: error.message };
      console.error("category fetched Error:", errRes);
      return rejectWithValue(errRes);
    }
  }
);
export const createcategory = createAsyncThunk(
  "category/craete",
  async (formData, { rejectWithValue }) => {
    const token = Cookies.get("token");
    if (!token) {
      return rejectWithValue({ message: "Unauthorized: No token found" });
    }

    try {
      const { data } = await axios.post(
        `
        ${NEXT_PUBLIC_API_URL}api/admin/category`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("category created:", data);
      return data;
    } catch (error) {
      const errRes = error.response?.data || { message: error.message };
      console.error("category created Error:", errRes);
      return rejectWithValue(errRes);
    }
  }
);

export const deletecategory = createAsyncThunk(
  "category/delete",
  async (id, { rejectWithValue }) => {
    const token = Cookies.get("token");
    if (!token) {
      return rejectWithValue({ message: "Unauthorized: No token found" });
    }

    try {
      const { data } = await axios.delete(
        `
        ${NEXT_PUBLIC_API_URL}api/admin/category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("category deleted:", data);
      return data;
    } catch (error) {
      const errRes = error.response?.data || { message: error.message };
      console.error("category deleted Error:", errRes);
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

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getallcategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(getallcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export default categorySlice.reducer;

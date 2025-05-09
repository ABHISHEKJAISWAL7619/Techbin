"use client"
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice"


export const makeStore = () => {
    return configureStore({
        reducer: {
            user:userSlice
            
        },
       
    })
};

export const store = makeStore();
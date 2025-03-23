import { configureStore } from "@reduxjs/toolkit";
import aluminiumDoosletterSlice from "../redux/aluminiumDoosletterSlice";


export const store = configureStore({
    reducer: {
        aluminium: aluminiumDoosletterSlice
    }
})
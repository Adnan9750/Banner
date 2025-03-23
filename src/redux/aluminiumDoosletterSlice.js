import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../API";


export const postAluminiumDoorsletter = createAsyncThunk(
    'aluminium/postAluminiumDoorsletter',
    async ({ data }) => {
        try {
            const response = await API.post('/detect-letters/', data)
            // console.log("response:", res);
            return response
        } catch (error) {
            console.log("Api error:", error);
        }
    }
)

const aluminiumDoosletterSlice = createSlice({
    name: 'aluminium',
    initialState: {
        data: {},
        loading: false,
        error: null,
        success: null,
    },
    extraReducers: (builder) => {
        builder

            .addCase(postAluminiumDoorsletter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postAluminiumDoorsletter.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload?.data
            })
            .addCase(postAluminiumDoorsletter.rejected, (state) => {
                state.loading = false;
                state.error = null;
            })
    }
})

export default aluminiumDoosletterSlice.reducer
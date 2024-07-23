import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCards = createAsyncThunk(
  "cards/fetchCardsStatus",
  async (param, thunkAPI) => {
    const { data } = await axios.get(
      "https://669fef36b132e2c136ff9df4.mockapi.io/cards"
    );

    if (data.length === 0) return thunkAPI.rejectWithValue("error");

    return data;
  }
);

const initialState = {
  cards: [],
  status: "loading",
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.cards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
        state.cards = [];
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.status = "success";
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = "error";
        state.cards = [];
      });
  },
});

export const { setItems } = cardSlice.actions;

export default cardSlice.reducer;

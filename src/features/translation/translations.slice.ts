import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  en: "en",
  ru: "ru",
  ro: "ro",
};

export const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {},
});

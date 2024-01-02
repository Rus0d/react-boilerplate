import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false
};

export const themeSlice = createSlice({
  name: "project-theme",
  initialState,
  reducers: {
    toggleThemeColor: state => {
      state.darkMode = !state.darkMode;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleThemeColor } = themeSlice.actions;

export default themeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileNavOpen: false,
  },
  reducers: {
    openMobileNav(state) {
      state.mobileNavOpen = true;
    },
    closeMobileNav(state) {
      state.mobileNavOpen = false;
    },
    toggleMobileNav(state) {
      state.mobileNavOpen = !state.mobileNavOpen;
    },
  },
});

export const { openMobileNav, closeMobileNav, toggleMobileNav } = uiSlice.actions;
export default uiSlice.reducer;

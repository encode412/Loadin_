import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventState: {
    dashboardNav: "",
  },
};
export const eventSlice = createSlice({
  name: "eventslice",
  initialState: initialState,
  reducers: {
    setDashboardNav: (state, action) => {
      state.eventState.dashboardNav = action.payload;
    },
  },
});

export const { setDashboardNav } = eventSlice.actions;

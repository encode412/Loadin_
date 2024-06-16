import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationState: {
    pickupLocation: {lat: "", lng: ""},
    dropoffLocation: {lat: "", lng: ""},
  },
};
export const locationSlice = createSlice({
  name: "locationslice",
  initialState: initialState,
  reducers: {
    setPickupLocation: (state, action) => {
      state.locationState.pickupLocation = action.payload;
    },
    setDropoffLocation: (state, action) => {
      state.locationState.dropoffLocation = action.payload;
    },
  },
});

export const { setPickupLocation, setDropoffLocation } = locationSlice.actions;

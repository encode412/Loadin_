import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationState: {
    pickupLocation: {lat: "", lng: ""},
    dropoffLocation: {lat: "", lng: ""},
    loadForm: ""
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
    setLoadForm: (state, action) => {
      state.locationState.loadForm = action.payload;
    },
  },
});

export const { setPickupLocation, setLoadForm, setDropoffLocation } = locationSlice.actions;

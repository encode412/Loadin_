import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventState: {
    dashboardNav: "",
    bookedDate: "",
    bookedTime: "",
    chooseDriver: false,
    paymentModal: false
  },
};
export const eventSlice = createSlice({
  name: "eventslice",
  initialState: initialState,
  reducers: {
    setDashboardNav: (state, action) => {
      state.eventState.dashboardNav = action.payload;
    },
    setBookedDate: (state, action) => {
      state.eventState.bookedDate = action.payload;
    },
    setBookedTime: (state, action) => {
      state.eventState.bookedTime = action.payload;
    },
    setChooseDriver: (state, action) => {
      state.eventState.chooseDriver = action.payload;
    },
    setPaymentModal: (state, action) => {
      state.eventState.paymentModal = action.payload;
    },
  },
});

export const { setDashboardNav, setBookedDate, setBookedTime, setChooseDriver, setPaymentModal } = eventSlice.actions;

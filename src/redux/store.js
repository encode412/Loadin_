import { configureStore } from '@reduxjs/toolkit'
import { eventSlice } from './features/eventSlice'
import { locationSlice } from './features/locationSlice'

export const store = configureStore({
  reducer: {
    eventstate: eventSlice.reducer,
    locationstate: locationSlice.reducer,
  },
})


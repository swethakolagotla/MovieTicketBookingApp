import { configureStore } from "@reduxjs/toolkit";
import movieSlicer from "./movieSlice";
import bookSlicer from "./Bookingslice";
import SeatsSlicer from "./Seatslice"
export const movieStore = configureStore({
  reducer: {
       movieSlicer,
       SeatsSlicer
  },
});
 
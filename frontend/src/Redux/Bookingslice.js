import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  booked: [],
  paid: [],
};
export const bookSlice = createSlice({
  name: "bookMovie",
  initialState,
  reducers: {
    addSeat: (state, action) => {
      state.booked.push(action.payload);
      console.log(state.booked);
    },

    remove: (state, action) => {
      console.log(action.payload);

      state.booked = state.booked.filter((ele) => {
        return ele.class !== action.payload.class;
      });
    },
   
    Empty: (state, action) => {
      state.booked = [];
    },
    paidSeat: (state, action) => {
      state.paid = [...state.booked];
      console.log(state.booked);
    },
  },
  /*extraReducers: (builder) => {
    builder.addCase(thunkGet.fulfilled, (state, action) => {
      state.movies = action.payload;
      console.log(state.movies);
    });

    builder.addCase(thunkGet.rejected, (state, action) => {
      console.log(action.payload);
      console.log("rejected");
    });
  },*/
});
export default bookSlice.reducer;
export const { addSeat, remove, Empty, paidSeat } =bookSlice.actions;
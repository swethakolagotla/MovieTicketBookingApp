import { createSlice } from "@reduxjs/toolkit";
import { thunkGet } from "./Thunk";

const initialState = {
 
  movies: [],
 
};
export const movieSlice = createSlice({
  name: "createMovie",
  initialState,
  reducers: {
    
    getMovies:(state, actions)=>{
      state.movies = actions.payload;
    },
  /*getOneMovie:(state,actions)=>{
  state.movies.find((ele)=>ele._id===actions.payload.id)
  }*/
     
  },
   
});
export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
 

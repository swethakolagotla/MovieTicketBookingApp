import { movieActions } from "./movieSlice";
import config from "../config";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getAllmovies= () => {
  return async (dispatch) => {
    axios
      .get(config.URL)
      .then((res) => {
        dispatch(movieActions.getMovies(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// export const getMoviebyId= () => {
//   return async (dispatch) => {
//     axios
//       .get(config.URL1)
//       .then((res) => {
//         dispatch(movieActions.getOneMovie(res.data.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
 
 
 

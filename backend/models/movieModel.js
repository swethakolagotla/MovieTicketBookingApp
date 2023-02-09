import mongoose from "mongoose";
 
  const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
  },
Title: {
    type:String,
  },
Director: {
    type: String,
  },
   
});
 
const Movie = mongoose.model("movie", ticketSchema, "movies");
export default Movie;

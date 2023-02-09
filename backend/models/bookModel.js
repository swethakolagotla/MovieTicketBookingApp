import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  time: {
    type:String,
  },
  date: { 
    type:String,
  },
  seats: [{
     type:String,
     }],
  amount: {
    type: Number, 
  },
});
const Book = new mongoose.model("book", bookSchema, "books");
export default Book;

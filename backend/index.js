import express from "express";
import mongoose from "mongoose";
import router from "./routes/movieRoute.js";
import cors from "cors"
import bookrouter from "./routes/bookRoute.js";
mongoose
  .connect(
    "mongodb+srv://swethak:Swetha240@cluster0.1xjubpd.mongodb.net/Movieapp?retryWrites=true&w=majority"
  )
  .then((con) => console.log("data connection established"))
  .catch((err) => console.log("failed", err));
mongoose.set("strictQuery", false);
const app = express();
app.use(cors())
app.use(express.json());
app.use(router);
app.use(bookrouter);
app.listen(4000, () => console.log("listening port to 4k..."));

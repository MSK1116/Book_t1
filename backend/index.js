import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import book_route from "../backend/Routes/book_route.js";

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;
const app = express();

app.use(cors());
// connect to mongoDB online

try {
  mongoose.connect(URI);
  console.log("Connected To MongoDB");
} catch (error) {
  console.log("Failed", error);
}
// define route

app.use("/book", book_route);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

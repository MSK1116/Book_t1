import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  published: String,
  page: Number,
  category: String,
  image: String,
});

const BOOK = mongoose.model("Book", bookSchema);

export default BOOK;

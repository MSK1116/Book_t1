import Book from "../Book_Model/Book.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Failed book_controller", error);
    res.status(500).json(error);
  }
};

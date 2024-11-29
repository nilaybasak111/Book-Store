import mongoose from "mongoose";

// Defining Schema for Book
const BookSchema = new mongoose.Schema({
    name : String,
    title : String,
    price : Number,
    catagory : String,
    image : String
})

const Book = mongoose.model("Book", BookSchema);
export default Book;
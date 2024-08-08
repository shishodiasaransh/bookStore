import express from "express";
import { addBook, getAllBooks, getBook, removeBook, updateBook }from "../controllers/bookController.js";
const bookRoutes=express.Router();
bookRoutes.get("/",getAllBooks);

bookRoutes.post("/",addBook);

bookRoutes.put("/:id",updateBook);

bookRoutes.get("/:id",getBook);

bookRoutes.delete("/:id",removeBook);

export default bookRoutes;
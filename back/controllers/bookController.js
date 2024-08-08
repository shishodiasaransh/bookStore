import bookModel from "../models/bookModel.js";
import {StatusCodes} from "http-status-codes";
export const getAllBooks = async(req,res)=> {
    const books = await bookModel.find();
    res.status (StatusCodes.OK).json({length: books.length , datat:books})
}

export const getBook = async (req,res) => {
    const id=req.param("id");
    const book= await bookModel.findById(id);
    if (book)
        return res.status(StatusCodes.OK).json(book);
    return res
                .status(StatusCodes.NOT_FOUND)
                .json({msg:`Book is not found with the id ${id}`})
}

export const updateBook = async (req,res) =>
    {
        try {
            console.log(req.params);
            const {id}=req.params;
            const updatedBook = await bookModel.findByIdAndUpdate(id,req.body,{returnDocument:"after"});
            if (updatedBook)
                return res.status(200).json({msg:"Your Book is Updated Successfully👍",updatedBook})
            return res.status(404).json({msg:`Book with the id :${id} does not found or updated`});
        } catch (error) {
            res.status(500).json({error});  
        }
        
    }

export const removeBook = async(req,res)=>
    {
       try {
         console.log(req.params);
         const {id}=req.params;
         const deletedBook = await bookModel.findByIdAndDelete(id);
         if (deletedBook)
             return res.status(200).json({msg:"Your Book is deleted Successfully👍",deletedBook})
         return res.status(404).json({msg:`Book with the id :${id} does not found`});
       } catch (error) {
         res.status(500).json({error});
       }
    }

export const addBook = async (req,res) =>
    {
        try {
            await bookModel.create(req.body)
            //res.send (req.body);
            res.status(StatusCodes.OK).json({msg:" book added successfully"})
        } catch (error) {
            
            res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({msg:"there is an error occured in the server"})
        }
    }
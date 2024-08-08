import mongoose from "mongoose";
const bookschema=mongoose.Schema({
   title:{
        type:String,
        required:true,
    },
   author:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    }},
    {
        timestamps:true,
    }


);
export default mongoose.model("book",bookschema);


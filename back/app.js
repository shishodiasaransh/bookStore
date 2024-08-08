import express from "express";
import 'dotenv/config';
import dbConnect from "./dbConnect.js";
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors"
const app= express();
app.use(express.json());

app.use(cors());
const PORT= process.env.PORT || 6000;
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Book Store </h1>");
});

app.use("/books",bookRoutes);

const start = async() => {
    try {
        await dbConnect(process.env.MONGO_URL);
        console.log('database connected successfully');
        app.listen(PORT,()=>{
            console.log('Server is running at ',PORT);
        })
    } catch (error) {
        console.log(error);
    }
};
start();

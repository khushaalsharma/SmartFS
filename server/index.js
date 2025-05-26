import express from "express";
import client from "./configs/db.config.js";
import uploadRouter from "./apis/upload.js";

const app = express();

app.use("/upload", uploadRouter);

app.listen(5000, async() => {
    console.log("server listening");
    try{
        await client.connect();
        console.log("Database connected");
    }
    catch(error){
        console.log("Can't connect to database", error);
    }
})
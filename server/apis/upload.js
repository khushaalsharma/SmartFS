import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import { configDotenv } from "dotenv";
import storage from "../configs/multer.config.js";
import uplaodManager from "../middlewares/upload.middleware.js";

configDotenv();

const router = express.Router();

const uploadManager = new uplaodManager();

router.use(cookieParser());
router.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

const upload  = multer({storage});

router.post("/file", upload.single('file'), async(req, res) => {   
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    try{
        const path = req.file.path;
        const fileEtension = req.file.filename.split('.').pop();
        const filename  = req.file.filename;

        let response = await uploadManager.uploadFile(filename, fileEtension, path);

        if(response != null){
            return res.status(200).json(response);
        }
    }
    catch(error){
        return res.status(500).json(error);
    }
});

export default router;
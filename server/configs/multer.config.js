import fs from "fs";
import multer from "multer";
import path from "path";

const __dirname = process.cwd();

console.log(__dirname);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileDestinationPath = path.join(__dirname, "..", "server", "uploads/");

        cb(null ,fileDestinationPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now().toString() + file.originalname);
    }
});

export default storage;

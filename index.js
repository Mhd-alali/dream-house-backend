import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import helment from 'helmet';
import path from 'path';
import { fileURLToPath } from "url";
import router from './router.js';
import multer from "multer";
import { logger } from "./middleware.js";

/**
 * config and middlewares
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
dotenv.config();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(helment.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(express.static('images'))

app.use(logger);

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        const filePath = path.join(__dirname, "images");
        cb(null, filePath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    // fix problem can't save arabic strings
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    callback(null, true);
};


const upload = multer({ storage, fileFilter });

app.get('/', (req, res) => {
    res.send('welcome to DreamHouse backend');
});

app.post('/upload', upload.single("file"), async (req, res) => {
    return res.status(200).send({ message: "file uploaded" });
});

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
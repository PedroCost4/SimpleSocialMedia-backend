import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from "url";
import authRoutes from '../routes/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();

app
.use(express.json())
.use(helmet())
.use(helmet.crossOriginResourcePolicy( { policy: 'cross-origin' } ))
.use(morgan('common'))
.use(bodyParser.json( { limit: "30mb", extended: true} ))
.use(bodyParser.urlencoded( { limit: "30mb", extended: true} ))
.use(cors())
.use("/assets", express.static(path.join(__dirname, "../../public/assets")))
.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));


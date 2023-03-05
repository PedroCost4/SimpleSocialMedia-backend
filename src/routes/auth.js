import express from 'express';
import { login } from '../controllers/auth.js';
import upload  from '../server/multerStorage.js';
import register from '../controllers/auth.js';
import { verifyToken } from '../middleware/auth.js';

export const authRoutes = express.Router();

authRoutes.post("/login", login);

router
.post("/register", upload.single("picture"), register)

export default authRoutes;
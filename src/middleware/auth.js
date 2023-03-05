import jwt from "jsonwebtoken";
import token from "../models/token.js";

export const verifyToken = async (req, res, next) => {
    try{
        let token = token.hasToken(req, res, next);
        token = token.bearerToken(req, res, next);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}
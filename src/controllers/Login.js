import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import login from '../models/login.js';

export const login = async (req, res) => { 
    
    try{
        const { email, password } = req.body;

        const user = login.verifyEmail(req, res);
        const isMatch = login.isMatch(req, res);

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;

        res.status(200).json({ token, user});
    }
    catch (err){
        res.status(500).json({
            error: err.message
        });
    }
}

export default login;
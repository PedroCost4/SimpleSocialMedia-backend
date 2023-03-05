import bcrypt from 'bcrypt';
import User from '../models/user.js';

class Login {
  static async verifyEmail(req, res) {
    const user = await User.findOne({ email: email });
    return (!user) ? res.status(400).json({ message: "User doesn't exist" }) : user;
  }

  static async isMatch(req, res) {
    const { password } = req.body;
    const user = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, user.password);
    return (!isMatch) ? res.status(400).json({ message: "Invalid credentials"}) : isMatch;
  }
}
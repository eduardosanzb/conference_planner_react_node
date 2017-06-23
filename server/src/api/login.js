import { Router } from 'express';
import bcrypt from 'bcrypt';
import generateToken from './lib/generateToken';
import User from '../models/User';
const router = Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user === null) {
      return res.json({
        success: false,
        message: 'Authentication failed. User not found'
      });
    }
		const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.json({
        success: false,
        message: 'Authentication failed. Wrong password'
      });
    }

    const token = generateToken(user);
    console.log(token);
    res.json({
      success: true,
      message: 'User authenticated',
      token,
			data: user
    });
  } catch (error) {
    console.warn(error);
    req.statusCode(500).json({ error });
  }
});

module.exports = router;

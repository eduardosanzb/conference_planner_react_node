import { Router } from 'express';
import bcrypt from 'bcrypt';
import config from '../config.json';
import User from '../models/User';
import generateToken from './lib/generateToken';
import jwt from 'jsonwebtoken';

const router = Router();
const secret = process.env.JWT_TOKEN || config.secret;


router.post('/signUp', async (req, res) => {
	const { firstName, lastName, email, password, permission } = req.body;
	const hash = bcrypt.hashSync(password.trim(), 10);
	const user = new User({
		firstName: firstName.trim(),
		lastName: lastName.trim(),
		email: email.trim(),
		password: hash,
		permission,
		activated: true
	});
	try {
		await user.save();
		const token = generateToken(user);
		res.json({
			success: true,
			user,
			token
		});	
	} catch (error) {
		res.json({
			success: false,
			error
		});
	}
});

router.get('/verifyToken', async (req, res) => {
  const { token } = req.query;
  if (!token) {
		return res.status(401).json({
			success: false,
			message: 'Must pass token'
		});
	}
	try {
		const tokenResult = await jwt.verify(token, secret);	
		const user = await User.findById(tokenResult._id);
		const newToken = generateToken(user);
		return res.json({
			success: true,
			data: user,
			token: newToken
		});
	} catch (error) {
		console.warn(error);
    req.statusCode(500).json({ error });
	}
});

module.exports = router;

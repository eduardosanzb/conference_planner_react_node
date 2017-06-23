import { Router } from 'express';
import User from '../models/User';
const router = Router();

router.post('/', async (req, res) => {
	const { email } = req.body;
	console.log(email);
	try {
		const user = await User.findOne({ email });
		console.log('===', user);
		res.status(200).json({
			success: !!(user !== null),
			data: user
		});
	} catch (error) {
		console.warn(error);
		req.statusCode(500).json({ error });
	}
});

module.exports = router;

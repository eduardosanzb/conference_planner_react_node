import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import config from '../../config.json';
const secret = process.env.JWT_TOKEN || config.secret;
const verifyTokenAsync = promisify(jwt.verify);


const verifyToken = async (req, res, next) => {
  const { token } = req.headers['authorization'];
  if (!token) return next();

  const bearerFree = token.replace('Bearer ', '');
	try {
		const user = await verifyTokenAsync(bearerFree, secret);
		req.user = user;
		next();	
	} catch (error) {
		res.status(401).json({
			success: false,
			message: 'Please register or login using a avalid email'
		});
	}
};

module.exports = verifyToken;
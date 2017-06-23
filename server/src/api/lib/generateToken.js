import jwt from 'jsonwebtoken';
import config from '../../config.json';
const secret = process.env.JWT_TOKEN || config.secret;

function generateToken({ firstName, lastName, _id }) {
	const u = {
		name: firstName,
		username: lastName,
		_id: _id.toString()
	};
	const token = jwt.sign(u, secret, {
		expiresIn: 60 * 60 * 24
	});
	return token;
}

module.exports = generateToken;

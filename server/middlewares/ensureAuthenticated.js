const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader) throw new Error('Token missing')

	const token = authHeader.split(' ')[1]

	try {
		const decoded = jwt.verify(token, process.env.JWT_KEY)
		req.usuario = decoded
		next()
	} catch {
		res.status(401).send('Invalid token!')
	}
}

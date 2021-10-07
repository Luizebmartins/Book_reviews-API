const user = require('../models/userModel')

exports.getUserByEmail = function (email) {
	return user.findOne({ where: { email } })
}

exports.saveUser = function (newUser) {
	return user.create(newUser, { raw: true })
}

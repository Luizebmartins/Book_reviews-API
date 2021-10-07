const user = require('../models/userModel')

exports.saveUser = function (newUser) {
	return user.create(newUser, { raw: true })
}

exports.getUser = function (id) {
	return user.findOne({ where: { id } })
}

exports.getUserByEmail = function (email) {
	return user.findOne({ where: { email } })
}

exports.deleteUser = function (id) {
	return user.destroy({ where: { id } })
}

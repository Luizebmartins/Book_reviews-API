const userData = require('../data/userData')

exports.saveUser = async function (newUser) {
	const existingUser = await userData.getUserByEmail(newUser.email)
	if (existingUser) throw new Error('User already exist')
	return userData.saveUser(newUser)
}

exports.getUser = async function (id) {
	const user = await userData.getUser(id)
	if (!user) throw new Error('user not found')
	return user
}

exports.deleteUser = function (id) {
	return userData.deleteUser(id)
}

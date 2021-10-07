const userData = require('../data/userData')

exports.saveUser = async function (newUser) {
	const existingUser = await userData.getUserByEmail(newUser.email)
	if (existingUser) throw new Error('User already exist')
	return userData.saveUser(newUser)
}

exports.getUser = async function (id) {
	const user = await userData.getUser(id)
	if (!user) throw new Error('User not found')
	return user
}

exports.putUser = async function (id, newData) {
	const existingUser = await userData.getUser(id)
	if (!existingUser) throw new Error('User not found')

	if (Object.prototype.hasOwnProperty.call(newData, 'email')) {
		const existingUserEmail = await userData.getUserByEmail(newData.email)
		if (existingUserEmail) throw new Error('Email already exist')
	}
	return userData.putUser(id, newData)
}

exports.deleteUser = function (id) {
	return userData.deleteUser(id)
}

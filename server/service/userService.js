const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userData = require('../data/userData')
require('dotenv').config()

exports.saveUser = async function (data) {
	const existingUser = await userData.getUserByEmail(data.email)
	if (existingUser) throw new Error('User already exist')

	const newUser = data
	const passwordHash = await bcrypt.hash(newUser.password, 8)
	newUser.password = passwordHash

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

exports.deleteUser = async function (id) {
	const existingUser = await userData.getUser(id)
	if (!existingUser) throw new Error('User not found')

	return userData.deleteUser(id)
}

exports.loginUser = async function (data) {
	const existingUser = await userData.getUserByEmail(data.email)
	if (!existingUser) throw new Error('Autheticated failed')

	const user = { id: existingUser.id, email: existingUser.email }

	const passwordMatch = await bcrypt.compare(data.password, existingUser.password)
	if (!passwordMatch) throw new Error('Autheticated failed')

	if (existingUser.admin === false) {
		const token = jwt.sign({}, process.env.JWT_KEY, {
			expiresIn: '1d',
		})
		return { user, token }
	}
	const token = jwt.sign({}, process.env.JWT_KEY_ADMIN, {
		expiresIn: '1d',
	})
	return { user, token }
}

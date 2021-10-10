const express = require('express')
const userService = require('../service/userService')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const router = express.Router()

router.post('/users', async (req, res, next) => {
	const data = req.body
	try {
		const newUser = await userService.saveUser(data)
		res.status(201).json(newUser)
	} catch (e) {
		next(e)
	}
})

router.get('/users/:id', ensureAuthenticated, async (req, res, next) => {
	try {
		const user = await userService.getUser(req.params.id)
		res.status(200).json(user)
	} catch (e) {
		next(e)
	}
})

router.put('/users/:id', async (req, res, next) => {
	const newData = req.body
	try {
		await userService.putUser(req.params.id, newData)
		res.status(200).end()
	} catch (e) {
		next(e)
	}
})

router.delete('/users/:id', async (req, res, next) => {
	try {
		await userService.deleteUser(req.params.id)
		res.status(200).end()
	} catch (e) {
		next(e)
	}
})

router.post('/users/login', async (req, res, next) => {
	const data = req.body
	try {
		const token = await userService.loginUser(data)
		res.status(200).json(token)
	} catch (e) {
		next(e)
	}
})

module.exports = router

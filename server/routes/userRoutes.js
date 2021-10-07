const express = require('express')
const userService = require('../service/userService')

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

router.get('/users/:id', async (req, res, next) => {
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

module.exports = router

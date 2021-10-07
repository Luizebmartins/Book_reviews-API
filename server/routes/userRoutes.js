const express = require('express')
const userService = require('../service/userService')

const router = express.Router()

router.post('/users', async (req, res) => {
	const user = req.body
	try {
		const newUser = await userService.saveUser(user)
		res.status(201).json(newUser)
	} catch (e) {
		res.status(409).send(e.message)
	}
})

router.get('/users/:id', async (req, res) => {
	try {
		const user = await userService.getUser(req.params.id)
		res.status(200).json(user)
	} catch (e) {
		res.status(204).send(e.message)
	}
})

router.put('/users/:id', async (req, res) => {
	const newData = req.body
	try {
		const user = await userService.putUser(req.params.id, newData)
		res.status(200).json(user)
	} catch (e) {
		if (e.message === 'User not found') res.status(204).send(e.message)
		else if (e.message === 'Email already exist') res.status(409).send(e.message)
	}
})

module.exports = router

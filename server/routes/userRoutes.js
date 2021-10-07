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
		res.status(404).send(e.message)
	}
})

module.exports = router

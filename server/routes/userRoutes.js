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

module.exports = router

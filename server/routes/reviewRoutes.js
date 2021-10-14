const express = require('express')
// const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const reviewService = require('../service/reviewService')

const router = express.Router()

router.post('/reviews', async (req, res, next) => {
	const data = req.body
	try {
		const newReview = await reviewService.saveReview(data)
		res.status(201).json(newReview)
	} catch (e) {
		next(e)
	}
})

module.exports = router

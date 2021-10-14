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

router.get('/reviews/:id', async (req, res, next) => {
	try {
		const review = await reviewService.getReview(req.params.id)
		res.status(200).json(review)
	} catch (e) {
		next(e)
	}
})

router.get('/reviews/:id/users', async (req, res, next) => {
	try {
		const userReviews = await reviewService.getUserReviews(req.params.id)
		res.status(200).json(userReviews)
	} catch (e) {
		next(e)
	}
})

router.get('/reviews/:id/books', async (req, res, next) => {
	try {
		const bookReviews = await reviewService.getBookReviews(req.params.id)
		res.status(200).json(bookReviews)
	} catch (e) {
		next(e)
	}
})

router.put('/reviews/:id', async (req, res, next) => {
	const newData = req.body
	try {
		await reviewService.putReview(req.params.id, newData)
		res.status(200).end()
	} catch (e) {
		next(e)
	}
})

router.delete('/reviews/:id', async (req, res, next) => {
	try {
		await reviewService.deleteReview(req.params.id)
		res.status(200).end()
	} catch (e) {
		next(e)
	}
})
module.exports = router

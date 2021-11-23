const express = require('express')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const authorService = require('../service/authorService')

const router = express.Router()

// Get all book authors
router.get('/authors/:id/books', async (req, res, next) => {
	try {
		const books = await authorService.getAuthors(req.params.id)
		res.status(200).json(books)
	} catch (e) {
		next(e)
	}
})

// Update author
router.put('/authors/:id', ensureAuthenticated, async (req, res, next) => {
	const newData = req.body
	try {
		if (req.usuario.admin !== true) throw new Error('Unauthorized')
		await authorService.putAuthor(req.params.id, newData)
		res.status(200).end()
	} catch (e) {
		next(e)
	}
})

module.exports = router

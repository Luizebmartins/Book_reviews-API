const express = require('express')
// const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
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

module.exports = router

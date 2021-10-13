const express = require('express')
// const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const bookService = require('../service/bookService')

const router = express.Router()

router.get('/books/:id', async (req, res, next) => {
	try {
		const book = await bookService.getBook(req.params.id)
		res.status(200).json(book)
	} catch (e) {
		next(e)
	}
})

router.get('/books/search/:titleOrAuthor', async (req, res, next) => {
	try {
		const book = await bookService.getBooks(req.params.titleOrAuthor)
		res.status(200).json(book)
	} catch (e) {
		next(e)
	}
})

module.exports = router

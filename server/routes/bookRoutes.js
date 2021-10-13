const express = require('express')
// const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const bookService = require('../service/bookService')

const router = express.Router()

router.get('/books/:nameOrAuthor', async (req, res, next) => {
	try {
		const book = await bookService.getBooks(req.params.nameOrAuthor)
		res.status(200).json(book)
	} catch (e) {
		next(e)
	}
})

module.exports = router

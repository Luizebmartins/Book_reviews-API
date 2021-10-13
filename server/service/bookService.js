const bookData = require('../data/bookData')

exports.getBook = async function (id) {
	const book = await bookData.getBook(id)
	if (!book) throw new Error('Book not found')
	return book
}

exports.getBooks = async function (titleOrAuthor) {
	const book = await bookData.getBooks(titleOrAuthor)
	if (!book.length) throw new Error('Book not found')
	return book
}

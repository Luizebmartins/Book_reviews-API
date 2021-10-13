const bookData = require('../data/bookData')

exports.getBooks = async function (nameOrAuthor) {
	const book = await bookData.getBooks(nameOrAuthor)
	if (!book.length) throw new Error('Book not found')
	return book
}

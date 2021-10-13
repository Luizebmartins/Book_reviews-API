const moment = require('moment')
const bookData = require('../data/bookData')
const authorData = require('../data/authorData')

exports.saveBook = async function (dataNewBook) {
	const existingBook = await bookData.getBookByIsbn(dataNewBook.isbn)
	if (existingBook) throw new Error('Book already exist')

	const { authors } = dataNewBook
	delete dataNewBook.authors
	dataNewBook.published_date = moment(new Date(dataNewBook.published_date), 'MM-DD-YYYY')
	const newBook = await bookData.saveBook(dataNewBook)

	const newAuthors = []
	for (let i = 0; i < authors.length; i += 1) {
		const author = authors[i]
		const newAuthor = await authorData.saveAuthor(author, newBook.id)
		newAuthors.push(newAuthor)
	}

	return { newBook, newAuthors }
}

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

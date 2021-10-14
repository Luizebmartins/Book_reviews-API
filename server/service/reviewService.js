const reviewData = require('../data/reviewData')
const userData = require('../data/userData')
const bookData = require('../data/bookData')

module.exports.saveReview = async function (data) {
	const existingUser = await userData.getUser(data.id_user)
	if (!existingUser) throw new Error('User not found')

	const existingBook = await bookData.getBook(data.id_book)
	if (!existingBook) throw new Error('Book not found')

	return reviewData.saveReview(data)
}

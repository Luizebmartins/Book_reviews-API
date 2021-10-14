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

module.exports.getReview = async function (id) {
	const review = await reviewData.getReview(id)
	if (!review) throw new Error('review not found')

	return review
}

module.exports.getUserReviews = async function (id) {
	const existingUser = await userData.getUser(id)
	if (!existingUser) throw new Error('User not found')

	const userReviews = await reviewData.getUserReviews(id)
	if (!userReviews.length) throw new Error('Reviews not found')

	return userReviews
}

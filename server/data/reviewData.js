const review = require('../models/reviewModel')

module.exports.saveReview = function (newReview) {
	return review.create(newReview, { raw: true })
}

module.exports.getReview = function (id) {
	return review.findOne({ where: { id } })
}

module.exports.getUserReviews = function (id) {
	return review.findAll({ where: { id_user: id } }, { raw: true })
}

module.exports.getBookReviews = function (id) {
	return review.findAll({ where: { id_user: id } }, { raw: true })
}

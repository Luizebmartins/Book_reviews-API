const review = require('../models/reviewModel')

module.exports.saveReview = function (newReview) {
	return review.create(newReview, { raw: true })
}

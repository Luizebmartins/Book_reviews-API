const author = require('../models/authorModel')

exports.saveAuthor = function (name, idBook) {
	return author.create({ name, id_book: idBook }, { raw: true })
}

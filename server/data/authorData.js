const author = require('../models/authorModel')

exports.saveAuthor = function (name, idBook) {
	return author.create({ name, id_book: idBook }, { raw: true })
}

exports.getAuthor = function (idBook) {
	return author.findAll({ where: { id_book: idBook } }, { raw: true })
}

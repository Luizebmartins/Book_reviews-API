// const book = require('../models/bookModel')
const { Op } = require('sequelize')
const author = require('../models/authorModel')
const book = require('../models/bookModel')

exports.getBooks = async function (nameOrAuthor) {
	const authoridBooks = await author.findAll({
		attributes: ['id_book'],
		where: {
			name: nameOrAuthor,
		},
		raw: true,
	})

	if (authoridBooks.length >= 1) {
		const ids = []

		for (let i = 0; i < authoridBooks.length; i += 1) {
			ids.push(authoridBooks[i].id_book)
		}

		const books = book.findAll({
			where: {
				id: {
					[Op.in]: ids,
				},
			},
		})
		return books
	}

	const books = book.findAll({ where: { title: nameOrAuthor } })
	return books
}

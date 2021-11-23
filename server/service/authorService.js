const authorData = require('../data/authorData')

exports.getAuthors = async function (idBook) {
	const authors = await authorData.getAuthor(idBook)
	if (!authors) throw new Error('Authors not found')

	return authors
}

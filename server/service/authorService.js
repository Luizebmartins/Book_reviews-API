const authorData = require('../data/authorData')

exports.getAuthors = async function (idBook) {
	const authors = await authorData.getAuthors(idBook)
	if (!authors) throw new Error('Authors not found')

	return authors
}

exports.putAuthor = async function (id, newData) {
	const existingAuthor = await authorData.getAuthor(id)
	if (!existingAuthor) throw new Error('Author not found')

	return authorData.putAuthor(id, newData)
}

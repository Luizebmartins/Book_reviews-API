const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const book = connection.define('books', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	title: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	publisher: {
		type: DataTypes.STRING(255),
		allowNull: false,
	},
	published_Date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	rating: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	page_count: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	isbn: {
		type: DataTypes.TEXT,
		allowNull: false,
		unique: true,

	},
}, {
	tableName: 'users',
	timestamps: false,
})

book.sync()
console.log('conectado')

module.exports = book

const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: 'localhost',
		dialect: 'postgres',
		logging: false,
	},
)

module.exports = sequelize

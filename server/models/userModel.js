const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const user = connection.define('users', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	login: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
	},
	admin: {
		type: DataTypes.BOOLEAN,
		defaultValue: 'false',
	},

}, {
	tableName: 'users',
	timestamps: false,
});

(async () => {
	await user.sync()
	module.exports = user
})()

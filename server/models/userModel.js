const { DataTypes } = require('sequelize')
const connection = require('../infra/database')

const user = connection.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	login: {
		type: DataTypes.STRING(50),
		allowNull: false,
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
	console.log('sucessful connect')
})()

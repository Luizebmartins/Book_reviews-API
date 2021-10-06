const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
  'database',
  'username',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  },
);

module.exports = sequelize;

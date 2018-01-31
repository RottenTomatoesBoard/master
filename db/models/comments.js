'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Comments = db.define('comments', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  body: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  imdbID: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  timestamp: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
});

module.exports = Comments;

// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Sequelize 인스턴스 가져오기

const User = sequelize.define('User', {
  googleId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = User;

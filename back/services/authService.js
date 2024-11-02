// services/authService.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const findOrCreateUser = async (profile) => {
  let user = await User.findOne({ where: { googleId: profile.id } });
  
  if (!user) {
    user = await User.create({
      googleId: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos[0].value,
    });
  }

  return user;
};

const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
  findOrCreateUser,
  createToken,
};

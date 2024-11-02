// controllers/authController.js
const authService = require('../services/authService');

const googleCallback = (req, res) => {
  const token = authService.createToken(req.user);
  res.redirect(`${process.env.OAUTH2_REDIRECT_URI}?token=${token}`);
};

const profile = (req, res) => {
  res.json({ user: req.user });
};

const logout = (req, res) => {
  res.json({ message: '로그아웃 완료' });
};

module.exports = {
  googleCallback,
  profile,
  logout,
};

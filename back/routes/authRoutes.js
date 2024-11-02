// routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const authenticateJWT = require('../middlewares/authenticateJWT');

const router = express.Router();

// Google 로그인 요청 라우트
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
);

// 인증 후 콜백 라우트
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  authController.googleCallback
);

// 프로필 라우트 (JWT로 보호됨)
router.get('/profile', authenticateJWT, authController.profile);

// 로그아웃 라우트
router.get('/logout', authController.logout);

module.exports = router;

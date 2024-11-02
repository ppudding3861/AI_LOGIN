// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authService = require('../services/authService');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.API_BASE_URL}/auth/google/callback`
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await authService.findOrCreateUser(profile);
      return done(null, user);
    } catch (error) {
      console.error("사용자 저장 중 오류:", error);
      return done(error, null);
    }
  }
));

module.exports = passport;

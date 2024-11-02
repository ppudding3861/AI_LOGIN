// middlewares/authenticateJWT.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: '토큰이 필요합니다' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: '토큰이 유효하지 않습니다' });
    }
    req.user = user; // 토큰이 유효한 경우 사용자 정보 설정
    next();
  });
};

module.exports = authenticateJWT;

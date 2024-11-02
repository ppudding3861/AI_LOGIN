// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('./config/passport');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// MySQL 데이터베이스 연결 및 동기화
sequelize.sync().then(() => {
  console.log("MySQL에 연결되었습니다");
}).catch((err) => {
  console.error("MySQL 연결 오류:", err);
});

// CORS 설정
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
}));

app.use(passport.initialize());

// 라우트 설정
app.use(authRoutes);

// 서버 실행
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

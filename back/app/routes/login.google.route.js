const express = require('express');
const router = express.Router();
const session = require('express-session');
const { google } = require('googleapis');

// 구글 OAuth 클라이언트 ID와 클라이언트 비밀번호를 환경 변수에서 가져옴
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// 로그인 URL을 만들기 위해 사용할 redirect URI
const REDIRECT_URI = 'http://localhost:8080/auth/google/callback';
// https://accounts.google.com/o/oauth2/v2/auth
// OAuth 2.0 클라이언트 객체 생성
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// 세션을 설정하는 미들웨어
router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// 로그인 페이지 라우트
router.get('/login', (req, res) => {
  // 인증 URL 생성
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['name', 'email', 'profile']
  });
  
  // 로그인 페이지로 리다이렉트
  res.redirect(authUrl);
});

// OAuth 콜백 라우트
router.get('/oauth2callback', async (req, res) => {
  // 구글 OAuth 2.0 API에서 반환된 인증 코드 가져오기
  const { code } = req.query;

  // 액세스 토큰 가져오기
  const { tokens } = await oauth2Client.getToken(code);
  
  // 세션에 액세스 토큰 저장
  req.session.tokens = tokens;

  // 메인 페이지로 리다이렉트
  res.redirect('/');
});

// 메인x, 소모임 메인 페이지 /spots
router.get('/spots', async (req, res) => {
  // 세션에서 액세스 토큰 가져오기
  const { tokens } = req.session;

  // 액세스 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!tokens) {
    return res.redirect('/login');
  }

  // Google OAuth 2.0 API를 사용하여 사용자 정보 가져오기
  const oauth2 = google.oauth2({
    auth: oauth2Client,
    version: 'v2'
  });
  const { data } = await oauth2.userinfo.get({ auth: oauth2Client });
  const { name, email } = data;

  // 사용자 정보를 출력
  res.send(`Hello ${name} (${email})`);
});

module.exports = router;
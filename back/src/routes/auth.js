// const express = require('express');
// const router = express.Router();

// router.get(
//   '/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] }),
// );

// //? 위에서 구글 서버 로그인이 되면, redirect url 설정에 따라 이쪽 라우터로 오게 된다. 인증 코드를 박게됨
// router.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }), //? 그리고 passport 로그인 전략에 의해 googleStrategy로 가서 구글계정 정보와 DB를 비교해서 회원가입시키거나 로그인 처리하게 한다.
//   (req, res) => {
//     res.redirect('/');
//   },
// );

// module.exports = router;

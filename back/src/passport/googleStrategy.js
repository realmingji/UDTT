const dotenv = require('dotenv');
const { Strategy } = require('passport-google-oauth20');

const User = require('../db/models/userModel');
dotenv.config();

const google = new Strategy(
  {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/api/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    const nickname = profile.displayName;
    const email = profile.emails[0].value;
    const provider = profile.provider;
    console.log(nickname);
    try {
      const user = await userModel.findOne({ email, provider });
      const exUser = await User.findOne({
        // 구글 플랫폼에서 로그인 했고 & snsId필드에 구글 아이디가 일치할경우
        where: { snsId: profile.id, provider: 'google' },
      });

      if (user) {
        done(null, user);
        return;
      }

      const createdUser = await userModel.create({
        nickname,
        email,
        provider,
      });

      done(null, createdUser);
    } catch (err) {
      done(null, err);
    }
  },
);

module.exports = google;

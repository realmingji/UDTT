//0311 google OAuth2.0 login 구현 추가

// 필요 module import, 엔진 설정
import express from 'express';
import {google} from 'googleapis';

const app = express();
app.set('views', 'src/views');
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 클라이언트 ID, 클라이언트 암호 및 리디렉션 URI로 oauth2Client 설정
// redirectUri는 Google 개발자 콘솔의 리디렉션 URI 승인에서 설정한 것과 동일 해야함
const oauth2Client = new google.auth.OAuth2(
    'Client id : 271847378830-j6eamq27m0ifuu5vkuc6n6c9ufup57p9.apps.googleusercontent.com',
    'Client Secret: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',
    'http://localhost:8080/auth/google/callback'
);
// redirectUrl을 생성, redirectUrl은 앱을 Gmail 계정으로 리디렉션
// scope 배열에 필요한 요소만 범위 목록에 포함하기
const redirectUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['email']
});

// 로그인 페이지로 이동
let auth = false;

app.get('/', async function (req, res) {
    let oauth2 = google.oauth2({version: 'v1', auth: oauth2Client});
    if (auth) {
        let userInfo = await oauth2.userinfo.v2.me.get();
        res.render('index', {buttonSpan: 'Sign out', url: 'http://localhost:8080/logout', userInfo: userInfo.data})
    } else {
        res.render('index', {buttonSpan: 'Sign in', url: redirectUrl, userInfo: {}})
    }
});

// Google access_token 및 refresh_token을 가져온 다음 oauth2Client로 설정
app.get('/auth/google/callback', async function (req, res) {
    const code = req.query.code;
    if (code) {
        const {tokens} = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        auth = true;
    }
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    oauth2Client.revokeCredentials().then(r => console.log('revoke ', r));
    auth = false;
    res.redirect('/');
});

app.listen(8080);
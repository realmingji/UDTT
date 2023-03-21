import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import * as S from './StyledLogin';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const serverURL = 'http://localhost:8080/api/login';

const Login = () => {
  const navigate = useNavigate();
  //.env에 놔두면 왜 안 될까,,,,
  const googleClientId =
    '271847378830-j6eamq27m0ifuu5vkuc6n6c9ufup57p9.apps.googleusercontent.com';
  //로그인 성공시 res처리
  const onLoginSuccess = async credentialResponse => {
    if (credentialResponse.credential !== null) {
      const userCredential = jwtDecode(credentialResponse.credential);
      console.log(userCredential);
      try {
        const res = await axios.post(serverURL, { userCredential });
        console.log(res.data, '성공');
        navigate('/');
      } catch (err) {
        console.log(err, '실패');
      }
    } else {
    }
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={googleClientId}>
        <S.LoginContainer>
          <S.LoginTitle>소셜 로그인</S.LoginTitle>
          <GoogleLogin
            buttonText="구글로 로그인"
            onSuccess={onLoginSuccess}
            onFailure={res => console.log(res, '실패')}
          />
        </S.LoginContainer>
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;

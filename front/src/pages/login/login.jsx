import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import * as S from './StyledLogin';
import jwtDecode from 'jwt-decode';

const Login = () => {
  //로그인 성공시 res처리
  const onLoginSuccess = credentialResponse => {
    if (credentialResponse.credential !== null) {
      const userCredential = jwtDecode(credentialResponse.credential);
      console.log(userCredential);
    }
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="271847378830-j6eamq27m0ifuu5vkuc6n6c9ufup57p9.apps.googleusercontent.com">
        <S.LoginContainer>
          <S.LoginTitle>소셜 로그인</S.LoginTitle>
          <GoogleLogin
            clientId="271847378830-j6eamq27m0ifuu5vkuc6n6c9ufup57p9.apps.googleusercontent.com"
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

import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import axios from 'axios';

const GoogleButton = () => {
  //구글 로그인 성공 시
  const onSuccess = res => {
    console.log(res, '성공');
  };
  // 액세스 토큰 전송,,,?
  //토큰값 localstorage에 저장,,,?

  //구글 로그인 실패 시
  const onFailure = () => {
    console.log('실패');
  };
  return (
    <>
      <GoogleOAuthProvider clientId="271847378830-j6eamq27m0ifuu5vkuc6n6c9ufup57p9.apps.googleusercontent.com">
        <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleButton;

import React from 'react';
import { GoogleLogout } from '@react-oauth/google';

const Logout = () => {
  const googleClientId =
    '271847378830-j6eamq27m0ifuu5vkuc6n6c9ufup57p9.apps.googleusercontent.com';

  const onSuccess = () => {
    console.log('로그아웃 성공');
    //로컬스토리지 토큰 삭제 후 새로고침 후 메인페이지로
    //localStorage.removeItem('token');
    window.location.reload();
    window.location = '/';
  };
  return (
    <>
      <GoogleLogout
        clientId={googleClientId}
        buttonText={'로그아웃'}
        onLogoutSuccess={onSuccess}
      />
    </>
  );
};

export default Logout;

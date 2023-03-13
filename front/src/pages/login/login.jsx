import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
  //클라이언트 ID (환경변수)
  let googleClientId =
    '271847378830-j6eamq27m0ifuu5vkuc6n6c9ufup57p9.apps.googleusercontent.com';
  //사용자 정보를 담아둘 userObj
  const [userObj, setUserObj] = useState({
    email: '',
    name: '',
  });
  //로그인 성공시 res처리
  const onLoginSuccess = res => {
    setUserObj({
      ...userObj,
      email: res.profileObj.email,
      name: res.profileObj.name,
    });
  };

  return (
    <div>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Google"
        onSuccess={result => onLoginSuccess(result)}
        onFailure={result => console.log(result)}
      />
    </div>
  );
};

export default Login;

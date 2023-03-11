import React from 'react';
import GoogleButton from './GoogleButton';
import * as S from './StyledLogin';

const Login = () => {
  return (
    <>
      <S.LoginContainer>
        <S.LoginTitle>소셜 로그인</S.LoginTitle>
        <GoogleButton />
      </S.LoginContainer>
    </>
  );
};

export default Login;

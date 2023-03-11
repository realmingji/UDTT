import React from 'react';
import * as S from './StyledNav';

const Nav = () => {
  return (
    <>
      <S.NavBar>
        <span>회원가입</span>
        <span>로그인</span>
        <span>라이더 모임</span>
        <span>경로추천</span>
      </S.NavBar>
    </>
  );
};
export default Nav;

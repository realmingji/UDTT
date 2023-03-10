import React from 'react';
import * as S from './styledMain';

const Main = () => {
  return (
    <S.MainContainer>
      <S.NavContainer>
        <S.MainTitle>우당탕탕</S.MainTitle>
        <S.NavBar>
          <ul>
            <span>로그인</span>
            <span>마이페이지</span>
            <span>라이더모임</span>
            <span>경로추천</span>
          </ul>
        </S.NavBar>
      </S.NavContainer>
    </S.MainContainer>
  );
};

export default Main;

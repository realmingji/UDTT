import React from 'react';
import { ROUTE } from '../../routes';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './StyledNav';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <S.MainContainer>
      <S.NavContainer>
        <S.MainTitle>
          <Link to={ROUTE.MAIN.link}>우당탕탕</Link>
        </S.MainTitle>
        <S.NavBar>
          <span>
            <Link to={ROUTE.LOGIN.link}>로그인</Link>
          </span>
          <span>
            {/* userid받는부분 수정예정 */}
            <Link to={ROUTE.MYPAGE.link}>마이페이지</Link>
          </span>
          <span>
            <Link to={ROUTE.COMMUNITYMAIN.link}>라이더모임</Link>
          </span>
          <span>
            <Link to="">경로추천</Link>
          </span>
        </S.NavBar>
      </S.NavContainer>
    </S.MainContainer>
  );
};

export default NavBar;

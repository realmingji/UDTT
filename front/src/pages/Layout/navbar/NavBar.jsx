import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './StyledNav';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <S.MainContainer>
      <S.NavContainer>
        <S.MainTitle>
          <Link to="/">우당탕탕</Link>
        </S.MainTitle>
        <S.NavBar>
          <span>
            <Link to="/login">로그인</Link>
          </span>
          <span>
            {/* userid받는부분 수정예정 */}
            <Link to="/users/:userId">마이페이지</Link>
          </span>
          <span>
            <Link to="users/groups">라이더모임</Link>
          </span>
          <span>
            <Link to="">경로추천</Link>
          </span>
        </S.NavBar>
      </S.NavContainer>
    </S.MainContainer>
  );
};

export default Nav;

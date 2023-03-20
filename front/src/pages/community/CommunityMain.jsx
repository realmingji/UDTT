import React from 'react';
import * as S from './StyledCommunity';
import { Link } from 'react-router-dom';

const CommunityMain = () => {
  return (
    <div>
      <Link to={'/users/groups/:groupId'}>
        <S.BoardBox>
          <h1>
            <span>모집 중</span> 한강에서 자전거 타실 분
          </h1>
          <S.Bottom>
            <h2>3월 28일 12시</h2>
            <S.Comment>
              <S.CommentIcon />
              <h2>2</h2>
            </S.Comment>
          </S.Bottom>
        </S.BoardBox>
      </Link>
      <Link to={'/users/groups/new'}>
        <S.AddBtn />
      </Link>
    </div>
  );
};

export default CommunityMain;

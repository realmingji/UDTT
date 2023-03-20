import React from 'react';
import * as S from './StyledCommunity';
import { Link } from 'react-router-dom';

const CommunityDetail = () => {
  return (
    <S.DetailBoard>
      <h1>
        <span>모집 중</span> 한강에서 자전거 타실 분
      </h1>
      <h1>3월 28일 10시</h1>
      <h1>10시에 한강 공원에서 자전거 타실분 있을까요?</h1>
      <h2>참여 중인 라이더 2/3</h2>
      <S.Profile>
        <S.ProfilePicture />
        <h3>김뫄뫄</h3>
        <h3>모임장</h3>
      </S.Profile>
      <S.Profile>
        <S.ProfilePicture />
        <h3>김뫄뫄</h3>
      </S.Profile>
      <S.Line />
      <S.CommentInput placeholder="댓글을 입력하세요" />
      <Link to="/users/groups">
        <S.ParticipationBtn>참여하기</S.ParticipationBtn>
      </Link>
    </S.DetailBoard>
  );
};

export default CommunityDetail;

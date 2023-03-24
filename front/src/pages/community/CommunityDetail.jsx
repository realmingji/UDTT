import React, { useState, useEffect } from 'react';
import * as S from './StyledCommunity';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CommunityDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5050/api/groups/${id}`).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <S.DetailBoard>
      <h1>
        <span>모집 중</span> {data.title}
      </h1>
      <h1>{data.startTime}</h1>
      <h1>{data.spot}</h1>
      <h1>{data.info}</h1>
      <S.Line />
      <S.CommentInput placeholder="댓글을 입력하세요" />
      <Link to="/users/groups">
        <S.ParticipationBtn>참여하기</S.ParticipationBtn>
      </Link>
    </S.DetailBoard>
  );
};

export default CommunityDetail;

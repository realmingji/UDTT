import React, { useState, useEffect } from 'react';
import * as S from './StyledCommunity';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const CommunityDetail = () => {
  const [data, setData] = useState({});
  const { groupId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5050/api/groups/${groupId}`).then(res => {
      setData(res.data);
    });
  }, [groupId]);
  return (
    <S.DetailBoard>
      <h1>
        <span>모집 중</span> {data.title}
      </h1>
      <h2>{moment(data.startTime).format('YYYY-MM-DD h시 mm분')}</h2>
      <h2>{data.spot}</h2>
      <h2>{data.info}</h2>
      <Link to="/users/groups">
        <S.ParticipationBtn>참여하기</S.ParticipationBtn>
      </Link>
    </S.DetailBoard>
  );
};

export default CommunityDetail;

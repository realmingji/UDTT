import React, { useState } from 'react';
import * as S from './StyledCommunity';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [spot, setSpot] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기
      await axios.post(
        'http://localhost:5050/api/groups/new',
        {
          title,
          spot,
          info,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.WriteBoard>
      <S.Input
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <S.Input
        placeholder="장소"
        value={spot}
        onChange={e => setSpot(e.target.value)}
      />
      <S.WriteTextarea
        placeholder="내용"
        value={info}
        onChange={e => setInfo(e.target.value)}
      />
      <Link to="/users/groups">
        <S.WriteBtn onClick={handleSubmit}>올리기</S.WriteBtn>
      </Link>
    </S.WriteBoard>
  );
};

export default CommunityWrite;

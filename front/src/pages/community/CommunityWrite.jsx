import React, { useState } from 'react';
import * as S from './StyledCommunity';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [startDate, setstartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [spot, setSpot] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5050/api/groups/new', {
        title,
        startDate,
        startTime,
        spot,
        info,
      });
      console.log('Data is successfully submitted');
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
      <S.SelectDate
        locale={ko}
        dateFormat="MM월dd일"
        selected={startTime}
        onChange={date => setstartDate(date)}
      />
      <S.SelectDate
        locale={ko}
        selected={startTime}
        onChange={date => setStartTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
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

import React, { useState } from 'react';
import * as S from './StyledCommunity';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquarePlus,
  faSquareMinus,
} from '@fortawesome/free-regular-svg-icons';

const CommunityWrite = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [count, setCount] = useState(1);
  let decrementCounter = () => setCount(count - 1);
  const incrementCounter = () => setCount(count + 1);

  if (count <= 1) {
    decrementCounter = () => setCount(1);
  }
  return (
    <S.WriteBoard>
      <S.Input placeholder="제목" />
      <S.SelectDate
        locale={ko}
        dateFormat="MM월dd일"
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
      <S.SelectDate
        locale={ko}
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <S.BtnContainer>
        <button onClick={() => decrementCounter()}>
          <FontAwesomeIcon icon={faSquareMinus} />
        </button>
        {count}
        <button onClick={() => incrementCounter()}>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </S.BtnContainer>
      <S.Input placeholder="장소" />
      <S.WriteTextarea placeholder="내용" />
      <Link to="/users/groups">
        <S.WriteBtn>올리기</S.WriteBtn>
      </Link>
    </S.WriteBoard>
  );
};

export default CommunityWrite;

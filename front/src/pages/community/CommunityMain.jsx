import React, { useEffect, useState } from 'react';
import * as S from './StyledCommunity';
import { Link } from 'react-router-dom';
import Map from './Map';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faPaperPlaneTop,
} from '@fortawesome/free-solid-svg-icons';
// http://localhost:5050/groups
const CommunityMain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5050/api/groups`).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div style={{ paddingBottom: '80px', overflowX: 'hidden' }}>
      <Map />
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

      {data.map((data, index) => (
        <Link to={`/users/groups/${index}`}>
          <S.BoardBox>
            <h1>
              <span>모집 중</span> {data.title}
            </h1>
            <S.Bottom>
              <h2>{data.startTime}</h2>
              <S.Comment>
                <S.CommentIcon />
                <h2>2</h2>
              </S.Comment>
            </S.Bottom>
          </S.BoardBox>
        </Link>
      ))}

      <Link to={'/users/groups/new'}>
        <S.AddBtn>
          <FontAwesomeIcon icon={faCirclePlus} />
        </S.AddBtn>
      </Link>
    </div>
  );
};

export default CommunityMain;

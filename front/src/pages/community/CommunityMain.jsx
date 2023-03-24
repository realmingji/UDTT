import React, { useEffect, useState } from 'react';
import * as S from './StyledCommunity';
import { Link } from 'react-router-dom';
import Map from './Map';
import axios from 'axios';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faPaperPlaneTop,
} from '@fortawesome/free-solid-svg-icons';

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
      {data.map((data, index) => (
        <Link key={data._id} to={`/users/groups/${data._id}`}>
          <S.BoardBox>
            <h1>
              <span>모집 중</span> {data.title}
            </h1>
            <S.Bottom>
              <h2>{moment(data.startTime).format('YYYY-MM-DD h시 mm분')}</h2>
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

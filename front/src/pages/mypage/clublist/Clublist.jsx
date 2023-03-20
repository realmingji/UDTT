import React from 'react';
import * as S from './StyledClublist';

export default function Clublist({ data }) {
  return (
    <S.MainContainer>
      {data.map(el => (
        <S.ListContainer key={el.id}>
          <S.MainInfo>
            <div>
              <p className="status">[{el.status}]</p>
              <p className="title">{el.title}</p>
            </div>
            <p className="placename">{el.location}</p>
          </S.MainInfo>
          <S.DateInfo>
            <p>{el.start_time}</p>
          </S.DateInfo>
        </S.ListContainer>
      ))}
    </S.MainContainer>
  );
}

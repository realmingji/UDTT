import { useState } from 'react';

import * as S from './styledMypage';

export default function MyPage() {
  const [customerInfo, setCustomerInfo] = useState([]);
  const [currentTab, setCurrentTab] = useState('');

  return (
    <S.Container>
      <S.WelcomeMsg>
        <S.AccountIcon className="mat-icon" />
        <p>안녕하세요 {customerInfo.name} 고객님 </p>
        <p>오늘도 환영합니다!</p>
      </S.WelcomeMsg>
      <S.MenuTab>
        <ul className="tabs">
          <li onMouseDown={() => setCurrentTab('orderlist')}>내 모임</li>
          <li onMouseDown={() => setCurrentTab('myinfo')}>내 정보 관리</li>
        </ul>
      </S.MenuTab>
      {currentTab === 'orderlist' && (
        <S.Subtitle>
          <div>
            <p>참여</p>
            <p>진행</p>
            <p>코멘트</p>
          </div>
          <S.Line widthLength="50%" />
        </S.Subtitle>
      )}
      {currentTab === 'myinfo' && (
        <S.Subtitle>
          <p>나의 정보 관리</p>
          <S.Line widthLength="50%" />
        </S.Subtitle>
      )}
    </S.Container>
  );
}

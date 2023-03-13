import { useState } from 'react';
import Clublist from './clublist/clublist';
import * as S from './styledMypage';

export default function MyPage() {
  const [customerInfo, setCustomerInfo] = useState([]);
  const [currentTab, setCurrentTab] = useState('');
  const [currentSubTab, setCurrentSubTab] = useState('');
  const [joinList, setJoinList] = useState([]);
  const [myClubList, setMyClubList] = useState([]);
  const [myCommentList, setMyCommentList] = useState([]);
  return (
    <S.Container>
      <S.WelcomeMsg>
        <S.AccountIcon className="mat-icon" />
        <p>안녕하세요 {customerInfo.name} 고객님 </p>
        <p>오늘도 환영합니다!</p>
      </S.WelcomeMsg>
      <S.MenuTab>
        <ul className="tabs">
          <li onMouseDown={() => setCurrentTab('clubList')} onClick={() => setCurrentSubTab('')}>내 모임</li>
          <li onMouseDown={() => setCurrentTab('myinfo')} onClick={() => setCurrentSubTab('')}>내 정보 관리</li>
        </ul>
      </S.MenuTab>
      {currentTab === 'clubList' && (
        <S.Subtitle>
          <div>
            <p onMouseDown={() => setCurrentSubTab('join')}>참여</p>
            <p onMouseDown={() => setCurrentSubTab('myclub')}>진행</p>
            <p onMouseDown={() => setCurrentSubTab('comment')}>코멘트</p>
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
      {currentSubTab === 'join' && (
        <S.ShowList>
          {joinList.length===0?('참여한 모임이 없습니다.'):(<Clublist/>)}
        </S.ShowList>
      )}
       {currentSubTab === 'myclub' && (
        <S.ShowList>
          {joinList.length===0?('주최한 모임이 없습니다.'):(<Clublist/>)}
        </S.ShowList>
      )}
       {currentSubTab === 'comment' && (
        <S.ShowList>
          {joinList.length===0?('등록한 댓글이 없습니다.'):(<Clublist/>)}
        </S.ShowList>
      )}
    </S.Container>
  );
}

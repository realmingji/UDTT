import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Clublist from './clublist/Clublist';
import * as S from './StyledMypage';

export default function MyPage() {
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState('');
  const [currentTab, setCurrentTab] = useState('clubList');
  const [currentSubTab, setCurrentSubTab] = useState('join');
  const [nickname, setNickname] = useState('join');
  const [joinList, setJoinList] = useState([]);
  const [myClubList, setMyClubList] = useState([]);
  const [myCommentList, setMyCommentList] = useState([]);

  // useEffect(() => {
  //   // 사용자정보가져오기
  //   axios
  //     .get(`http://localhost:5001/users/${userId}`)
  //     .then(res => setCustomerInfo(res.data));
  // }, []);

  ///////////// test용_사용자정보가져오기  //////////////
  useEffect(() => {
    axios.get('/data/customerInfo.json').then(res => setCustomerInfo(res.data));
  }, []);
  ///////////// test용_사용자정보가져오기  //////////////

  const submitChangedNickname = event => {
    event.preventDefault();
    let userNickname = { user_name: nickname };
    console.log(userNickname);
    // axios
    //   .patch(`http://localhost:5001/users/${userId}`, userNickname)
    //   .then(() => alert('닉네임이 변경되었습니다.'));
  };

  const signout = () => {
    // axios
    //   .delete(`http://localhost:5001/users/${userId}`)
    //   .then(() => navigate('/'));
  };

  return (
    <S.Container>
      <S.WelcomeMsg>
        <S.AccountIcon className="mat-icon" />
        {/* 닉네임부분 변경예정 */}
        <p>
          안녕하세요 '
          <span className="nickname"> {customerInfo.user_name}</span> ' 님
        </p>
        <p>오늘도 환영합니다!</p>
      </S.WelcomeMsg>
      <S.MenuTab>
        <ul className="tabs">
          <li
            onClick={() => {
              setCurrentTab(CURRENT_TAB.CLUB_LIST);
              setCurrentSubTab(CURRENT_SUBTAB.JOIN);
            }}
          >
            내 모임
          </li>
          <li
            onClick={() => {
              setCurrentTab(CURRENT_TAB.MY_INFO);
              setCurrentSubTab('');
            }}
          >
            내 정보 관리
          </li>
        </ul>
      </S.MenuTab>
      {currentTab === CURRENT_TAB.CLUB_LIST && (
        <S.Subtitle>
          <div>
            <p onClick={() => setCurrentSubTab(CURRENT_SUBTAB.JOIN)}>참여</p>
            <p onClick={() => setCurrentSubTab(CURRENT_SUBTAB.MY_CLUB)}>진행</p>
            <p onClick={() => setCurrentSubTab(CURRENT_SUBTAB.MY_COMMENT)}>
              코멘트
            </p>
          </div>
          <S.Line widthLength="50%" />
        </S.Subtitle>
      )}
      {currentTab === CURRENT_TAB.MY_INFO && (
        <>
          <S.Subtitle>
            <p>나의 정보 관리</p>
            <S.Line widthLength="50%" />
          </S.Subtitle>
          <S.FormContainer onSubmit={submitChangedNickname}>
            <div className="form-field">
              <label htmlFor="nickname">닉네임</label>
              <input
                required
                id="nickname"
                type="text"
                name="nickname"
                placeholder="변경할 닉네임을 입력해 주세요"
                onChange={e => {
                  setNickname(e.target.value);
                }}
              />
            </div>
            <S.StyledButton>변경하기</S.StyledButton>
          </S.FormContainer>
          <S.SignoutDiv>
            <p onClick={signout}>회원탈퇴</p>
          </S.SignoutDiv>
        </>
      )}
      {currentSubTab === CURRENT_SUBTAB.JOIN && (
        <S.ShowList>
          {joinList.length === 0 ? '참여한 모임이 없습니다.' : <Clublist />}
        </S.ShowList>
      )}
      {currentSubTab === CURRENT_SUBTAB.MY_CLUB && (
        <S.ShowList>
          {joinList.length === 0 ? '주최한 모임이 없습니다.' : <Clublist />}
        </S.ShowList>
      )}
      {currentSubTab === CURRENT_SUBTAB.MY_COMMENT && (
        <S.ShowList>
          {joinList.length === 0 ? '등록한 댓글이 없습니다.' : <Clublist />}
        </S.ShowList>
      )}
    </S.Container>
  );
}

const CURRENT_TAB = {
  CLUB_LIST: 'clubList',
  MY_INFO: 'myinfo',
};

const CURRENT_SUBTAB = {
  JOIN: 'clubList',
  MY_CLUB: 'myinfo',
  MY_COMMENT: 'comment',
};

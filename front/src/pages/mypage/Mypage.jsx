import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Myinfo from './myinfo/myinfo';
import Clublist from './clublist/Clublist';
import * as S from './StyledMypage';

export default function MyPage() {
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState('');
  const [currentTab, setCurrentTab] = useState('clubList');
  const [currentSubTab, setCurrentSubTab] = useState('join');
  const [nickname, setNickname] = useState('');
  const [joinList, setJoinList] = useState([]);
  const [myClubList, setMyClubList] = useState([]);
  const [myCommentList, setMyCommentList] = useState([]);

  // [ 사용자정보가져오기 ]
  // useEffect(() => {
  //   axios.get(`http://localhost:5001/users/${userId}`).then(res => {
  //     setCustomerInfo(res.data);
  //     setJoinList(res.data.join_list);
  //     setMyClubList(res.data.my_group_list);
  //     setMyCommentList(res.data.comment_list);
  //   });
  // }, []);

  // [ 닉네임변경 ]
  // const submitChangedNickname = event => {
  //   axios
  //     .patch(`http://localhost:5001/users/${userId}`, userNickname)
  //     .then(() => {
  //       alert('닉네임이 변경되었습니다.');
  //       setNickname('');
  //     });
  // };

  // [ 회원탈퇴 ]
  // const signout = () => {
  //   axios
  //     .delete(`http://localhost:5001/users/${userId}`)
  //     .then(() => navigate({ROUTE.MAIN.link}));
  // };

  /////////////////////////// test용  ////////////////////////////
  useEffect(() => {
    axios.get('/data/customerInfo.json').then(res => {
      setCustomerInfo(res.data);
      setJoinList(res.data.join_list);
      setMyClubList(res.data.my_group_list);
      setMyCommentList(res.data.comment_list);
    });
  }, []);

  const submitChangedNickname = event => {
    event.preventDefault();
    let userNickname = { nickname: nickname };
    console.log(userNickname);
    alert('닉네임이 변경되었습니다.');
    setNickname('');
  };

  const signout = () => {
    navigate('/');
  };
  /////////////////////////// test용  ////////////////////////////

  return (
    <S.Container>
      {/* 웰컴메세지 & 닉네임 */}
      <S.WelcomeMsg>
        <S.AccountIcon className="mat-icon" />
        <p>
          안녕하세요 '<span className="nickname"> {customerInfo.nickname}</span>{' '}
          ' 님
        </p>
        <p>오늘도 환영합니다!</p>
      </S.WelcomeMsg>

      {/* 주메뉴칼럼 데이터*/}
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

      {/* 서브메뉴칼럼 데이터*/}
      {currentTab === CURRENT_TAB.CLUB_LIST && (
        <S.Subtitle>
          <div>
            <p
              onClick={() => {
                setCurrentSubTab(CURRENT_SUBTAB.JOIN);
              }}
            >
              참여
            </p>
            <p
              onClick={() => {
                setCurrentSubTab(CURRENT_SUBTAB.MY_CLUB);
              }}
            >
              진행
            </p>
            <p
              onClick={() => {
                setCurrentSubTab(CURRENT_SUBTAB.MY_COMMENT);
              }}
            >
              코멘트
            </p>
          </div>
          <S.Line widthLength="50%" />
        </S.Subtitle>
      )}

      {/* 내정보관리 */}
      {currentTab === CURRENT_TAB.MY_INFO && (
        <Myinfo
          submitEvent={submitChangedNickname}
          setNicknameEvent={setNickname}
          signoutEvent={signout}
          nicknameValue={nickname}
          customerInfo={customerInfo}
        />
      )}

      {/* 내모임관리 */}

      {/* 모임_참여모임 */}
      {currentSubTab === CURRENT_SUBTAB.JOIN && (
        <S.ShowList>
          {joinList.length === 0 ? (
            '참여한 모임이 없습니다.'
          ) : (
            <Clublist data={joinList} />
          )}
        </S.ShowList>
      )}

      {/* 모임_주최모임 */}
      {currentSubTab === CURRENT_SUBTAB.MY_CLUB && (
        <S.ShowList>
          {myClubList.length === 0 ? (
            '주최한 모임이 없습니다.'
          ) : (
            <Clublist data={myClubList} />
          )}
        </S.ShowList>
      )}

      {/* 모임_코멘트 */}
      {currentSubTab === CURRENT_SUBTAB.MY_COMMENT && (
        <S.ShowList>
          {myCommentList.length === 0 ? (
            '등록한 댓글이 없습니다.'
          ) : (
            <Clublist data={myCommentList} />
          )}
        </S.ShowList>
      )}
    </S.Container>
  );
}

// 탭메뉴(주) 상수데이터
const CURRENT_TAB = {
  CLUB_LIST: 'clubList',
  MY_INFO: 'myinfo',
};

// 탭메뉴(서브) 상수데이터
const CURRENT_SUBTAB = {
  JOIN: 'join',
  MY_CLUB: 'myinfo',
  MY_COMMENT: 'comment',
};

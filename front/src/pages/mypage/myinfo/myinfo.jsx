import * as S from './styledMyinfo';

export default function Myinfo({
  submitEvent,
  setNicknameEvent,
  signoutEvent,
  nicknameValue,
  customerInfo,
}) {
  return (
    <>
      <S.Subtitle>
        <p>나의 정보 관리</p>
        <S.Line widthLength="50%" />
      </S.Subtitle>

      <S.FormContainer onSubmit={submitEvent}>
        <div className="infos">
          <p>이메일</p>
          <p className="email">{customerInfo.email}</p>
        </div>
        <div className="form-field">
          <label htmlFor="nickname">닉네임</label>
          <input
            required
            id="nickname"
            type="text"
            name="nickname"
            value={nicknameValue}
            placeholder="변경할 닉네임을 입력해 주세요"
            onChange={e => {
              setNicknameEvent(e.target.value);
            }}
          />
          <S.StyledButton>변경하기</S.StyledButton>
        </div>
      </S.FormContainer>

      <S.SignoutDiv>
        <p onClick={signoutEvent}>회원탈퇴</p>
      </S.SignoutDiv>
    </>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './StyledSignUp';

const SignUp = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const userData = {
      nickname: nickname,
      email: email,
      password: password,
    };
    if (nickname.length === 0 || email.length === 0 || password.length === 0) {
      setErrMsg(() => '닉네임, 이메일, 비밀번호를 입력해 주세요.');
      return;
    }
    if (nickname.length < 3) {
      setErrMsg(() => '3글자 이상의 닉네임을 입력해주세요.');
    }
    if (password !== confirmPw) {
      setErrMsg(() => '비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      await axios.post(`http://localhost:5050/api/register`, { ...userData });
      alert('회원가입에 성공했습니다.');
      navigate('/login');
    } catch (err) {
      console.log(err);
      alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <S.Form onSubmit={handleSubmit}>
        <S.FormContainer>
          <S.Fieldset>
            <label>닉네임: </label>
            <input
              onChange={e => setNickname(e.target.value)}
              placeholder="nickname"
              id="nickname"
              required
              name="nickname"
              value={nickname}
              type="text"
              autocomplete="off"
            />
          </S.Fieldset>
          <S.Fieldset>
            <label>이메일: </label>
            <input
              placeholder="email"
              onChange={e => setEmail(e.target.value)}
              required
              value={email}
              type="email"
              id="userId"
              name="userId"
              autocomplete="off"
            />
          </S.Fieldset>
          <S.Fieldset>
            <label>비밀번호: </label>
            <input
              required
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
              name="password"
              id="password"
              autocomplete="off"
            />
          </S.Fieldset>
          <S.Fieldset>
            <label>비밀번호 재확인: </label>
            <input
              required
              onChange={e => setConfirmPw(e.target.value)}
              value={confirmPw}
              type="password"
              placeholder="confirm password"
              id="confirmPw"
              name="confirmPw"
              autocomplete="off"
            />
          </S.Fieldset>
          <S.FormErrorMessage>
            {errMsg && <text>{errMsg}</text>}
          </S.FormErrorMessage>
          <S.RegisterButton type="submit" onClick={handleSubmit}>
            가입하기
          </S.RegisterButton>
        </S.FormContainer>
      </S.Form>
    </div>
  );
};

export default SignUp;

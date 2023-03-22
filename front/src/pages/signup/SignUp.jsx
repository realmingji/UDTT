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
  const [errMsg, setErrMsg] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    const userData = {
      userName: nickname,
      userEmail: email,
      userPassword: password,
    };
    if (password !== confirmPw) {
      setErrMsg(() => '비밀번호가 일치하지 않습니다.');
      return;
    }
    if (nickname.length < 2) {
      setErrMsg(() => '2글자 이상의 닉네임을 입력해주세요.');
    }
    if (nickname.length === 0 || email.length === 0 || password.length === 0) {
      setErrMsg(() => '닉네임, 이메일, 비밀번호를 입력해 주세요.');
      return;
    }
    try {
      await axios.post(`http://localhost:5050/register`, { ...userData });
      alert('회원가입에 성공했습니다.');
      navigate('/login');
    } catch (err) {
      console.log(err);
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
              required
              value={nickname}
              id="name"
              name="name"
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
              id="email"
              type="email"
              name="email"
              autocomplete="off"
            />
          </S.Fieldset>
          <S.Fieldset>
            <label>비밀번호: </label>
            <input
              required
              onChange={e => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
          </S.Fieldset>
          <S.Fieldset>
            <label>비밀번호 재확인: </label>
            <input
              required
              onChange={e => setConfirmPw(e.target.value)}
              id="ConfirmPw"
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
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

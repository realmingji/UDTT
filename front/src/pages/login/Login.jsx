import React, { useState } from 'react';
import * as S from './StyledLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setErrMsg(() => '이메일과 비밀번호를 입력해 주세요.');
    } else {
      try {
        const response = await axios.post(`http://localhost:5050/api/login`, {
          userId: email,
          password: password,
        });
        //localStorage에 token값 저장
        localStorage.setItem('token', response.data.token);
        window.location.reload();
        alert('로그인이 완료되었습니다!');
        navigate('users/groups');
      } catch (error) {
        setErrMsg(() => '아이디와 비밀번호를 다시 확인해주세요.');
      }
    }
  };

  return (
    <div>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.FormContainer>
          <S.FormFieldset>
            <S.FormLabel htmlFor="email">이메일: </S.FormLabel>
            <S.FormInput
              value={email}
              type="email"
              placeholder="email"
              onChange={e => setEmail(e.target.value)}
            />
          </S.FormFieldset>
          <S.FormFieldset>
            <S.FormLabel htmlFor="password">비밀번호: </S.FormLabel>
            <S.FormInput
              value={password}
              type="password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
            />
          </S.FormFieldset>
          <S.FormSubmitButton type="submit" onClick={handleSubmit}>
            Login
          </S.FormSubmitButton>
          <S.FormErrorMessage>
            {errMsg && <text>{errMsg}</text>}
          </S.FormErrorMessage>
        </S.FormContainer>
      </S.LoginForm>
    </div>
  );
};

export default Login;

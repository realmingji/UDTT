import React from 'react';
import { ROUTE_ARR } from './routes';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

/*
  회원가입 : /register
  로그인 : /login
  사용자 정보 조회 : /users/:userId
  사용자 정보 수정 : /users/:userId
  사용자 정보 삭제 : /users/:userId
  메인 페이지 : /
  모임 메인 : /users/groups
  모임 상세 : /users/groups/:groupId
  모임 등록 : /users/groups/
  모임 수정 : /users/groups/:groupId 
  모임 삭제 : /users/groups/:groupId 
  댓글 등록 : /user/comments/:commentsId
  댓글 수정 : /user/comments/:commentsId
  댓글 삭제 : /user/comments/:commentsId
*/

const Router = () => {
  return (
    <>
      <Nav />
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default Router;

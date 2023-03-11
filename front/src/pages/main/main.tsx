import React from 'react';
import * as S from './styledMain';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Main = () => {
  return (
    <S.MainContainer>
      <S.NavContainer>
        <S.MainTitle>우당 탕탕</S.MainTitle>
        <Nav />
      </S.NavContainer>
      <Footer />
    </S.MainContainer>
  );
};

export default Main;

import React from 'react';
import * as S from './styledMain';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Main = () => {
  return (
    <>
      <S.MainContainer>
        <S.MainTitle>
          우당
          <br />
          탕탕
        </S.MainTitle>
        <Nav />
      </S.MainContainer>
      <Footer />
    </>
  );
};

export default Main;

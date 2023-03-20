import React from 'react';
import * as S from './StyledFooter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <S.MainContainer>
      <S.FooterContainer>
        <p className="title">UDTT Inc.</p>
        <p className="subtitle">서울 한강공원 라이더 커뮤니티</p>
      </S.FooterContainer>
      <S.FooterContainer>
        <p className="icons">
          <InstagramIcon className="icon" />
          <FacebookIcon className="icon" />
          <EmailIcon className="icon" />
        </p>
      </S.FooterContainer>
    </S.MainContainer>
  );
}

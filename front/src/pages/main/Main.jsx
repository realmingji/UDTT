import React from 'react';
import * as S from './StyledMain';

const Main = () => {
  return (
    <S.MainContainer>
      {/* 아래멘트는 임의...바꿀예정 */}
      <div>
        <p>연료가격 상승 및 팬데믹 방어, </p>
        <p>지구 환경까지 지킬수 있는 방법은?</p>
        <p className="maintitle">자전거!</p>
      </div>

      <iframe
        src="https://public.tableau.com/views/_16788805731950/1_1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
        width="1000"
        height="80%"
        title="구역별 자전거이용률"
      ></iframe>
    </S.MainContainer>
  );
};

export default Main;

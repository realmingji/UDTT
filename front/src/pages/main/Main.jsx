import React, { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import * as S from './StyledMain';

const Main = () => {
  const [url, setUrl] = useState(true);
  console.log(url);
  const firstURL =
    'https://public.tableau.com/views/UDTT-Data_map_11/1_1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true';
  const secondURL =
    'https://public.tableau.com/views/UDTT-DataAnalysis_17map/1_1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true';
  const changeState = () => {
    setUrl(cur => !cur);
  };
  return (
    <S.MainContainer>
      {/* 아래멘트는 임의...바꿀예정 */}
      <div>
        <p>연료가격 상승 및 팬데믹 방어, </p>
        <p>지구 환경까지 지킬수 있는 방법은?</p>
        <p className="maintitle" onClick={changeState}>
          자전거!
        </p>
      </div>

      <iframe
        onClick={changeState}
        src={url ? firstURL : secondURL}
        width="75%"
        height="1000"
        title="자전거 시각화 데이터"
      />
      <ArrowCircleRightIcon className="right" onClick={changeState} />
      <ArrowCircleLeftIcon className="left" onClick={changeState} />
    </S.MainContainer>
  );
};

export default Main;

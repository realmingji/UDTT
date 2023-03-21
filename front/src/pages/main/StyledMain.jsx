import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 25px;
    margin-bottom: 20px;
    > .maintitle {
      font-size: 35px;
      color: #1ca82a;
    }
    > p {
      padding: 10px;
    }
  }
  iframe {
    position: relative;
  }
  .right {
    position: absolute;
    right: 160px;
    font-size: 50px;
    cursor: pointer;
    color: #4fc95b;
  }
  .left {
    position: absolute;
    left: 160px;
    font-size: 50px;
    cursor: pointer;
    color: #4fc95b;
  }
`;

import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* text-align: center; */
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
`;
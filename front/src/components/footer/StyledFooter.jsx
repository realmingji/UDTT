import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: #1ca82a;
  padding: 10px 70px;
  color: white;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  .title {
    font-size: 17px;
    font-weight: 900;
    margin-right: 10px;
  }
  .subtitle {
    font-size: 13px;
  }
  .icons {
    width: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      font-size: 30px;
    }
  }
`;

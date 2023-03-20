import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
`;
export const ListContainer = styled.div`
  font-size: 20px;
  background-color: white;
  border: 1px solid #4bc857;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MainInfo = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    > .status {
      font-weight: 900;
      font-size: 18px;
      color: green;
      margin-right: 5px;
    }
    > .title {
      font-weight: 900;
      font-size: 18px;
      color: black;
    }
  }
  > .placename {
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DateInfo = styled.div`
  font-size: 16px;
`;

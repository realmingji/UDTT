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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    > .status {
      text-align: start;
      font-weight: 900;
      font-size: 17px;
      width: 90px;
      color: green;
      margin-right: 5px;
    }
    > .title {
      font-weight: 900;
      font-size: 17px;
      color: black;
    }
  }
  > .date_info {
    font-size: 16px;
    margin-top: 5px;
  }
`;

export const Icons = styled.div`
  font-size: 15px;
  > div {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 22px;
    margin: 1px 5px;
  }
`;

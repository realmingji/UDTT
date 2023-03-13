import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Container = styled.div`
  width: 100vw;
  padding: 40px;
`;

export const WelcomeMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  > p {
    font-weight: 500;
    color: #b1b1b1;
  }
  > .mat-icon {
    font-size: 45px;
    margin-bottom: 10px;
  }
`;

export const Line = styled.hr`
  width: ${props => props.widthLength};
  background: #1ca82a;
  border-radius: 15px;
  border: 0;
  height: 10px;
`;

export const AccountIcon = styled(AccountCircleIcon)`
  color: #1ca82a;
`;

export const MenuTab = styled.div`
  width: 55%;
  margin: 70px auto;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  > .tabs {
    display: flex;
    > li {
      width: 100%;
      text-align: center;
      border: 1px solid #b1b1b1;
      padding: 20px;
      cursor: pointer;
      color: #b1b1b1;

      &:hover {
        font-wight: 900;
        border-bottom: none;
        color: black;
      }
    }
  }
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    margin-bottom: 10px;
    font-size: 18px;
  }
  > div {
    width: 25%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      font-size: 18px;
    }
  }
`;

export const ShowList = styled.div`
  padding: 30px;
  text-align: center;
`;

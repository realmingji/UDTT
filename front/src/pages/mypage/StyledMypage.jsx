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
    padding-bottom: 8px;
    color: #666464;
    .nickname {
      color: black;
      font-weight: 900;
      font-size: 18px;
    }
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
  height: 7px;
`;

export const AccountIcon = styled(AccountCircleIcon)`
  color: #1ca82a;
`;

export const MenuTab = styled.div`
  width: 55%;
  margin: 50px auto;
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
        font-weight: 900;
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
      cursor: pointer;
      &:hover {
        font-weight: 900;
        font-size: 18px;
        color: #1ca82a;
      }
    }
  }
`;

export const ShowList = styled.div`
  padding: 30px;
  width: 40%;
  margin: 50px auto;
  text-align: center;
  color: #666464;
  border-radius: 20px;
  background-color: #e7ffd6;
`;

export const FormContainer = styled.form`
  padding: 40px;
  width: 40%;
  margin: 50px auto 15px auto;
  text-align: center;
  color: #666464;
  border-radius: 20px;
  background-color: #e7ffd6;
  display: flex;
  justify-content: center;
  align-items: center;
  > .form-field {
    width: 70%;
    > input {
      border: hidden;
      width: 60%;
      margin-left: 15px;
      border-bottom-style: groove;
      background-color: inherit;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: rgba(153, 164, 151, 1);
  color: rgb(59, 59, 59);
  font-size: 13px;
  font-weight: 600;
  width: 70px;
  border: none;
  border-radius: 10px;
  padding-block: 5px;
  text-align: center;
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  }
`;

export const SignoutDiv = styled.div`
  text-align: center;
  > p {
    font-size: 13px;
    padding-left: 400px;
    color: rgb(140, 147, 142);
    &:hover {
      cursor: pointer;
      font-weight: 900;
      color: #1ca82a;
    }
  }
`;

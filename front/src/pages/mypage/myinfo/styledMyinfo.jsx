import styled from 'styled-components';

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

export const Line = styled.hr`
  width: ${props => props.widthLength};
  background: #1ca82a;
  border-radius: 15px;
  border: 0;
  height: 7px;
`;

export const FormContainer = styled.form`
  padding: 40px 20px;
  width: 40%;
  margin: 50px auto 15px auto;
  text-align: center;
  color: #666464;
  border-radius: 20px;
  background-color: #e7ffd6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > .form-field {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    > input {
      border: hidden;
      width: 53%;
      margin: 0px 15px;
      border-bottom-style: groove;
      background-color: inherit;
    }
  }
  > .infos {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
    > .email {
      margin: 0px 15px;
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

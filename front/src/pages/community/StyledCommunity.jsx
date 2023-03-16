import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DatePicker from 'react-datepicker';

export const BoardBox = styled.div`
  width: 70%;
  height: 100px;
  border: 1px solid lightgray;
  margin: auto;
  padding: 15px;

  h1 {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  h2 {
    margin-top: 3px;
  }
  span {
    color: #1ca82a;
  }
`;

export const AddBtn = styled(AddCircleIcon)`
  font-size: large;
  color: #1ca82a;
  position: fixed;
  right: 25px;
  bottom: 70px;
  z-index: 10000;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Comment = styled.div`
  display: flex;
  float: right;
`;

export const CommentIcon = styled(ChatBubbleOutlineIcon)`
  margin-right: 2px;
`;

export const WriteBoard = styled.div`
  width: 70%;
  margin: auto;
  height: 500px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 25px;
  align-items: center;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  margin-bottom: 15px;
  outline: none;
  text-decoration: underline;
  text-underline-position: under;

  ::placeholder {
    color: #929292;
  }
`;

export const WriteTextarea = styled.textarea`
  width: 100%;
  height: 60%;
  font-size: 20px;
  border: 1px solid;
  resize: none;
  outline: none;
  margin: 25px 0 25px 0;
  ::placeholder {
    color: #929292;
  }
`;

export const WriteBtn = styled.div`
  width: 70%;
  height: 45px;
  font-size: 20px;
  background-color: #1ca82a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const SelectDate = styled(DatePicker)`
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  margin-bottom: 15px;
`;

export const BtnContainer = styled.div`
  margin-bottom: 15px;
  button {
    margin: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const DetailBoard = styled.div`
  width: 70%;
  margin: auto;

  h1 {
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: bold;
  }
  h2 {
    margin-top: 3px;
  }
  span {
    color: #1ca82a;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin: 15px 0 15px 0;
`;

export const Profile = styled.div`
  display: flex;
  margin-top: 20px;

  h3 {
    font-weight: bold;
    margin-left: 15px;
  }
`;

export const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: lightgray;
`;

export const CommentInput = styled.input`
  font-size: 15px;
  width: 80%;
  display: block;
  margin: 0 auto;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  outline: none;
  text-decoration: underline;
  text-underline-position: under;

  ::placeholder {
    color: #929292;
  }
`;

export const ParticipationBtn = styled.div`
  width: 70%;
  height: 45px;
  font-size: 20px;
  background-color: #1ca82a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 150px;
`;

import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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

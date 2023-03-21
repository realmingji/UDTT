import { useNavigate } from 'react-router-dom';

import moment from 'moment';
import GroupIcon from '@mui/icons-material/Group';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './StyledClublist';

export default function Clublist({ data }) {
  const navigate = useNavigate();
  return (
    <S.MainContainer>
      {data.map(el => (
        <S.ListContainer
          key={el.group_id || el.comment_id}
          onClick={() => {
            navigate(`/users/groups/${el.group_id}`);
          }}
        >
          <S.MainInfo>
            <div>
              {el.status && <p className="status">[{el.status}]</p>}
              <p className="title">{el.title || el.comment}</p>
            </div>
            <p className="date_info">
              {moment(el.createAt).format('YYYY-MM-DD')}
            </p>
          </S.MainInfo>
          {el.members_count && (
            <S.Icons>
              <div>
                <GroupIcon className="icon" />
                <span>{el.members_count}</span>
              </div>
              <div>
                <ChatBubbleOutlineIcon className="icon" />
                <span>{el.comments_count}</span>
              </div>
            </S.Icons>
          )}
        </S.ListContainer>
      ))}
    </S.MainContainer>
  );
}

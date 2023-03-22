import Main from './pages/main/Main';
import MyPage from './pages/mypage/Mypage';
import Login from './pages/login/Login';
import Logout from './pages/login/Logout';
import SignUp from './pages/signup/SignUp';
import CommunityMain from './pages/community/CommunityMain';
import CommunityWrite from './pages/community/CommunityWrite';
import CommunityDetail from './pages/community/CommunityDetail';

export const ROUTE = {
  MAIN: {
    path: '/',
    link: '/',
    element: Main,
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: Login,
  },
  LOGOUT: {
    path: '/logout',
    link: '/logout',
    element: Logout,
  },
  SIGNUP: {
    path: '/register',
    link: '/register',
    element: SignUp,
  },
  MYPAGE: {
    path: '/users/:userId',
    link: '/users/:userId',
    element: MyPage,
  },
  COMMUNITYMAIN: {
    path: '/users/groups',
    link: '/users/groups',
    element: CommunityMain,
  },
  COMMUNITYDETAIL: {
    path: '/users/groups/:groupId',
    link: '/users/groups/:groupId',
    element: CommunityDetail,
  },
  COMMUNITYWRITE: {
    path: '/users/groups/new',
    link: '/users/groups/new',
    element: CommunityWrite,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);

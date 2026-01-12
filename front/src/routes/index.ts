import Admin from '../pages/admin';
// import Board from '../pages/board'; // Removed to avoid confusion with new board pages
import TestPage from '../pages/admin/TestPage';
import BoardDetail from '../pages/board/BoardDetail';
import BoardForm from '../pages/board/BoardForm';
import BoardList from '../pages/board/BoardList';
import Chat from '../pages/chat';
import Forbidden from '../pages/error/Forbidden';
import NotFound from '../pages/error/NotFound';
import Login from '../pages/login';
import Main from '../pages/main';
import NewsDetailView from '../pages/news/NewsDetailView';
import NewsFeedView from '../pages/news/NewsFeedView';
import Schedule from '../pages/schedule';
import { RouteMenuItem } from '../types/core.type';
import { RouteLink, UserRole } from '../utils/constants';

export const routeConfig: RouteMenuItem[] = [
  {
    path: RouteLink.MAIN,
    element: Main,
    showInMenu: false,
    authRequired: false,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.LOGIN,
    element: Login,
    showInMenu: false,
    authRequired: false,
    layout: ['footer'],
  },
  {
    path: RouteLink.NEWS,
    label: '공지사항',
    element: NewsFeedView,
    showInMenu: true,
    authRequired: false,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.NEWS_DETAIL,
    element: NewsDetailView,
    showInMenu: false,
    authRequired: false,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.BOARD,
    label: '자유게시판',
    element: BoardList,
    showInMenu: true,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.BOARD_WRITE,
    element: BoardForm,
    showInMenu: false,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.BOARD_DETAIL,
    element: BoardDetail,
    showInMenu: false,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.BOARD_EDIT,
    element: BoardForm,
    showInMenu: false,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.CHAT,
    label: '채팅방',
    element: Chat,
    showInMenu: true,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.ADMIN,
    label: '관리자 설정',
    element: Admin,
    showInMenu: true,
    authRequired: true,
    roles: [UserRole.ADMIN],
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.ADMIN_TEST,
    label: 'TEST',
    element: TestPage,
    showInMenu: true,
    authRequired: true,
    roles: [UserRole.ADMIN],
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.SCHEDULE,
    label: '마이페이지',
    element: Schedule,
    showInMenu: false,
    authRequired: true,
    roles: [UserRole.USER, UserRole.ADMIN],
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.FORBIDDEN,
    element: Forbidden,
    showInMenu: false,
    authRequired: false,
    layout: ['footer'],
  },
  {
    path: RouteLink.DEFAULT,
    element: NotFound,
    showInMenu: false,
    authRequired: false,
    layout: ['footer'],
  },
];

export default routeConfig;

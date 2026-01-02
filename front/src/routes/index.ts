import Admin from '../pages/admin';
import Board from '../pages/board';
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
    authRequired: true,
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
    path: RouteLink.BOARD,
    label: '자유게시판',
    element: Board,
    showInMenu: true,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.NEWS,
    label: '공지사항',
    element: NewsFeedView,
    showInMenu: true,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.NEWS_DETAIL,
    element: NewsDetailView,
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
    path: RouteLink.SCHEDULE,
    label: '마이페이지',
    element: Schedule,
    showInMenu: true,
    authRequired: true,
    roles: [UserRole.USER, UserRole.ADMIN],
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.FORBIDDEN,
    element: Forbidden,
    showInMenu: false,
    authRequired: true,
    layout: ['footer'],
  },
  {
    path: RouteLink.DEFAULT,
    element: NotFound,
    showInMenu: false,
    authRequired: true,
    layout: ['footer'],
  },
];

export default routeConfig;

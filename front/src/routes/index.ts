import Admin from '../pages/admin';
import TestPage from '../pages/admin/TestPage';
import Chat from '../pages/chat';
import Forbidden from '../pages/error/Forbidden';
import NotFound from '../pages/error/NotFound';
import FreeBoardDetail from '../pages/freeboard/FreeBoardDetail';
import FreeBoardList from '../pages/freeboard/FreeBoardList';
import Login from '../pages/login';
import Main from '../pages/main';
import NoticeDetail from '../pages/notice/NoticeDetail';
import NoticeForm from '../pages/notice/NoticeForm';
import NoticeList from '../pages/notice/NoticeList';
import Schedule from '../pages/mypage';
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
    path: RouteLink.NOTICE,
    label: '공지사항',
    element: NoticeList,
    showInMenu: true,
    authRequired: false,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.NOTICE_WRITE,
    element: NoticeForm,
    showInMenu: false,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.NOTICE_DETAIL,
    element: NoticeDetail,
    showInMenu: false,
    authRequired: false,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.NOTICE_EDIT,
    element: NoticeForm,
    showInMenu: false,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.FREE_BOARD,
    label: '자유게시판',
    element: FreeBoardList,
    showInMenu: true,
    authRequired: true,
    layout: ['header', 'nav', 'footer'],
  },
  {
    path: RouteLink.FREE_BOARD_DETAIL,
    element: FreeBoardDetail,
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

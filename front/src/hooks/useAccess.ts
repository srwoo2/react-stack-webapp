import { useCallback, useEffect } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { routeConfig } from '../routes/index';
import { RouteLink } from '../utils/constants';
import useAuth from './useAuth';

export type AccessStatus = 'AUTHORIZED' | 'NEED_LOGIN' | 'FORBIDDEN' | 'ALREADY_LOGGED_IN';

export const useAccess = () => {
  const { isLoggedIn, userRole } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentRoute = routeConfig.find((r) => matchPath({ path: r.path, end: true }, pathname));

  const getStatus = useCallback((): AccessStatus => {
    if (isLoggedIn && currentRoute?.authRequired === false) return 'ALREADY_LOGGED_IN';
    if (!isLoggedIn && currentRoute?.authRequired === true) return 'NEED_LOGIN';
    if (isLoggedIn && currentRoute?.roles && !currentRoute.roles.includes(userRole || '')) return 'FORBIDDEN';
    return 'AUTHORIZED';
  }, [isLoggedIn, userRole, currentRoute]);

  useEffect(() => {
    const status = getStatus();

    // 이미 로그인된 상태에서 로그인 페이지 접근
    if (status === 'ALREADY_LOGGED_IN') {
      navigate(-1);
      return;
    }

    // 인증이 필요한 화면 접근
    if (status === 'NEED_LOGIN') navigate(RouteLink.LOGIN, { replace: true });

    // 권한 없는 화면 접근
    if (status === 'FORBIDDEN') navigate(RouteLink.FORBIDDEN, { replace: true });
  }, [getStatus, navigate]);

  return {
    currentRoute,
    hasAccess: getStatus() === 'AUTHORIZED',
  };
};

export default useAccess;

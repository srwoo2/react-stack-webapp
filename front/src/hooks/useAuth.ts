import { useEffect, useState } from 'react';
import { CookieKey } from '../utils/constants';
import { getCookie } from '../utils/cookie';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getCookie(CookieKey.ACCESS_TOKEN));
  const [userRole, setUserRole] = useState<string | undefined>(getCookie(CookieKey.ROLE));
  const [userId, setUserId] = useState<string | undefined>(getCookie(CookieKey.USER_ID));

  useEffect(() => {
    const token = getCookie(CookieKey.ACCESS_TOKEN);
    const role = getCookie(CookieKey.ROLE);
    const id = getCookie(CookieKey.USER_ID);

    setIsLoggedIn(!!token);
    setUserRole(role);
    setUserId(id);
  }, []);

  return { isLoggedIn, userRole, userId };
};

export default useAuth;

import React, { createContext, useCallback, useMemo, useState } from 'react';
import { CookieKey } from '../utils/constants';
import { deleteAllCookies, getCookie, setCookie } from '../utils/cookie';

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: string | undefined;
  userId: string | undefined;
  login: (userId: string, role: string, token: string) => void;
  logout: (callback?: () => void) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!getCookie(CookieKey.ACCESS_TOKEN));
  const [userRole, setUserRole] = useState<string | undefined>(getCookie(CookieKey.ROLE));
  const [userId, setUserId] = useState<string | undefined>(getCookie(CookieKey.USER_ID));

  const login = useCallback((id: string, role: string, token: string) => {
    setCookie(CookieKey.ACCESS_TOKEN, token, 1);
    setCookie(CookieKey.USER_ID, id);
    setCookie(CookieKey.ROLE, role);

    setIsLoggedIn(true);
    setUserId(id);
    setUserRole(role);
  }, []);

  const logout = useCallback((callback?: () => void) => {
    deleteAllCookies();

    setIsLoggedIn(false);
    setUserId(undefined);
    setUserRole(undefined);

    if (callback) callback();
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      userRole,
      userId,
      login,
      logout,
    }),
    [isLoggedIn, userRole, userId, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

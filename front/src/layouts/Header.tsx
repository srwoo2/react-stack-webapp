import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { ActionLink, HeaderActions, HeaderWrapper, LogoSection, StatusText } from '../styles/layout.style';
import { RouteLink, WordKey } from '../utils/constants';

const Header: React.FC = () => {
  const { userId, logout: authLogout } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    authLogout(() => {
      navigate(RouteLink.MAIN);
    });
  };

  return (
    <HeaderWrapper>
      <LogoSection onClick={() => navigate(RouteLink.MAIN)} style={{ cursor: 'pointer' }}>
        {WordKey.PROJECT_NAME}
      </LogoSection>

      <HeaderActions>
        {userId ? (
          <>
            <StatusText>{userId}님</StatusText>
            <ActionLink onClick={logout}>로그아웃</ActionLink>
          </>
        ) : (
          <ActionLink onClick={() => navigate(RouteLink.LOGIN)}>로그인</ActionLink>
        )}
      </HeaderActions>
    </HeaderWrapper>
  );
};

export default Header;

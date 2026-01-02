import React from 'react';
import { StyledA, StyledDiv, StyledHeader, StyledHeaderItemWrap, StyledHeaderLogo } from '../styles/layout.style';
import { RouteLink, WordKey } from '../utils/constants';
import { deleteAllCookies } from '../utils/cookie';

interface HeaderProp {
  userId?: string;
}

const Header: React.FC<HeaderProp> = ({ userId }) => {
  const logout = () => {
    deleteAllCookies();
    window.location.href = RouteLink.LOGIN;
  };

  return (
    <StyledHeader>
      <StyledHeaderLogo href={RouteLink.MAIN}>{WordKey.PROJECT_NAME}</StyledHeaderLogo>
      <StyledHeaderItemWrap>
        {userId ? (
          <>
            <StyledDiv>{userId}님</StyledDiv>
            <StyledA onClick={logout}>로그아웃</StyledA>
          </>
        ) : (
          <StyledA href={RouteLink.LOGIN}>로그인</StyledA>
        )}
      </StyledHeaderItemWrap>
    </StyledHeader>
  );
};

export default Header;

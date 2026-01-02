import React from 'react';
import { Link } from 'react-router-dom';
import routeConfig from '../routes';
import { StyledNav, StyledNavItem, StyledNavItemIink, StyledNavItemWrap } from '../styles/layout.style';
import { RouteMenuItem } from '../types/core.type';

interface NavProp {
  userRole?: string;
}

const Nav: React.FC<NavProp> = ({ userRole }) => {
  const menuItems: RouteMenuItem[] = routeConfig.filter((route: RouteMenuItem) => {
    /**
     * 메뉴 필터링
     * 1. 메뉴 표시 여부 확인
     * 2. 권한 여부 확인
     */
    if (!route.showInMenu) return false;
    if (!route.roles || route.roles.length === 0) return true;
    return !!userRole && route.roles.includes(userRole);
  });

  return (
    <StyledNav>
      <StyledNavItemWrap>
        {menuItems.map((item) => (
          <StyledNavItem key={item.path}>
            <StyledNavItemIink as={Link} to={item.path}>
              {item.label}
            </StyledNavItemIink>
          </StyledNavItem>
        ))}
      </StyledNavItemWrap>
    </StyledNav>
  );
};

export default Nav;
